import express from "express";
const app: express.Express = express();
const port = 3003;

// 1~6のサイコロをN個振る
app.get("/api/v1/dice/cube/", (req, res) => {
  const n = parseInt(String(req.query.n), 10);

  if (isNaN(n) || n < 1) {
    res
      .status(400)
      .send({ message: "クエリパラメータnに1以上の数値を入れてください。" });
  }

  if (n > 100) {
    res
      .status(400)
      .send({ message: "クエリパラメータnに100以下の数値を入れてください。" });
  }

  const values = Array.from(
    { length: n },
    () => Math.floor(Math.random() * 6) + 1
  );

  res.status(200).send({ values: values });
});

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
