import { Router } from "express";

const router = Router();

// 1~mのサイコロをn個振る
router.post("/", (req, res) => {
  const n = parseInt(String(req.body.n), 10);
  const m = parseInt(String(req.body.m), 10);

  if (isNaN(n) || n < 1 || n > 100) {
    res.status(400).send({
      message: "クエリパラメータnに1以上100以下の数値を入れてください。",
    });
  }

  if (isNaN(m) || m < 2 || m > 10000) {
    res.status(400).send({
      message: "クエリパラメータmに2以上10000以下の数値を入れてください。",
    });
  }

  const values = Array.from(
    { length: n },
    () => Math.floor(Math.random() * m) + 1
  );

  res.status(200).send({ values: values });
});

// 1~6のサイコロをn個振る
router.get("/cube/", (req, res) => {
  const n = parseInt(String(req.query.n), 10);

  if (isNaN(n) || n < 1 || n > 100) {
    res.status(400).send({
      message: "クエリパラメータnに1以上100以下の数値を入れてください。",
    });
  }

  const values = Array.from(
    { length: n },
    () => Math.floor(Math.random() * 6) + 1
  );

  res.status(200).send({ values: values });
});

module.exports = router;
