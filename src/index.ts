import express from "express";
const app: express.Express = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.status(200).send({ i: 3, j: 19 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
