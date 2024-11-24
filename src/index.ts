import express from "express";
const app: express.Express = express();
const port = 3003;

app.get("/api/v1/dice/", (_req, res) => {
  res.status(200).send({ value: Math.floor(Math.random() * 6) + 1 });
});

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
