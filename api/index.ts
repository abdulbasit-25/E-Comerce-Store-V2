import serverless from "serverless-http";

import app, { initializeApp } from "../server/app";

export const config = {
  runtime: "nodejs20.x",
};

export default async function handler(req: any, res: any) {
  await initializeApp();
  return serverless(app)(req, res);
}
