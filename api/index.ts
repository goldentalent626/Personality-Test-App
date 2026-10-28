// On Vercel, this file runs as a serverless function for every /api/* request.
// The frontend is served separately as static files from dist/public.
// (Locally, `npm run dev` still uses server/index.ts as before.)
import express from "express";
import { registerRoutes } from "../server/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
registerRoutes(app);

export default app;
