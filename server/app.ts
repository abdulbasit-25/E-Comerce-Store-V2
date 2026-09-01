import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { connectDatabase } from "./config/database";
import { registerRoutes } from "./routes";

export const app = express();
let appInitialized: Promise<void> | null = null;

export async function initializeApp() {
  if (appInitialized) {
    return;
  }

  appInitialized = (async () => {
    app.disable("x-powered-by");
    app.use(
      helmet({
        contentSecurityPolicy: false,
        crossOriginResourcePolicy: false,
      }),
    );

    const allowedOrigins = [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    ].filter(Boolean) as string[];

    app.use(
      cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
          }

          callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
      }),
    );

    app.use(morgan("dev"));
    app.use(cookieParser());
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ extended: true }));

    app.get("/api/health", async (_req, res) => {
      try {
        await connectDatabase();
        res.json({ ok: true, status: "healthy" });
      } catch {
        res
          .status(500)
          .json({ success: false, message: "Database unavailable" });
      }
    });

    await connectDatabase();
    await registerRoutes(app);

    app.use((err: any, _req: any, res: any, _next: any) => {
      const statusCode = err.status || err.statusCode || 500;
      const message = err.message || "Something went wrong";

      if (statusCode >= 500) {
        console.error("API Error:", err);
      }

      res.status(statusCode).json({
        success: false,
        message:
          process.env.NODE_ENV === "production"
            ? "Something went wrong"
            : message,
      });
    });
  })();

  await appInitialized;
}

export default app;
