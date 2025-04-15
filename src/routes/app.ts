import { Router } from "express";

const r = Router();

//raiz
r.get("/", (_req, res) => {
  res.send({
    message: "Welcome to the Jimov API! 🚀",
    status: "success",
    code: 200,
    additional_info: {
      server: "https://jimov-api.vercel.app/",
      discord: "https://discord.gg/tyZ39GCX7R",
    },
  });
});

export default r;
