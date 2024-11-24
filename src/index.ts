import express from "express";
const app: express.Express = express();
const port = 3002;

app.get("/", (_req, res) => {
  res.status(200).send({ i: 3, j: 19 });
});

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
