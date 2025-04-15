import { Router } from "express";

const r = Router();
const startTime = new Date(); // capture when the server starts

// raiz
r.get("/", (_req, res) => {
  const currentTime = new Date();
  const uptimeInSeconds = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);

  res.send({
    message: "Jimov API is up and running 🎬🎉🎉",
    status: "success",
    code: 200,
    version: "1.0.0",
    server_time: currentTime.toISOString(),
    uptime: `${uptimeInSeconds} seconds`,
    additional_info: {
      server: "https://jimov-api.vercel.app/",
      discord: "https://discord.gg/tyZ39GCX7R",
    },
  });
});

export default r;
