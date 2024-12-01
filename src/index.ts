import express from "express";
const app: express.Express = express();
const port = 3003;

// 1~6のサイコロをN個振る
app.get("api/v1/dice/cube", (req: any, res: any) => {
  const n = parseInt(String(req.query.n), 10);

  if (isNaN(n) || n < 1) {
    return res
      .status(400)
      .send("クエリパラメータnに1以上の数値を入れてください。");
  }

  return res.status(200).send({ value: Math.floor(Math.random() * 6) + 1 });
});

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
