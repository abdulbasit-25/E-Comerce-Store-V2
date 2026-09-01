import { config } from "dotenv";
config();

import app, { initializeApp } from "./app";

const port = Number(process.env.PORT || 5000);

initializeApp().then(() => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Local server listening on http://localhost:${port}`);
  });
});
