import { Router } from "express";

const router = Router();

/**
 *
 * @param n サイコロの数
 * @param m サイコロの上限値
 * @returns サイコロの出目の配列 [1,2,...]
 */
const diceValues = (n: number, m: number) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * m) + 1);
};

/**
 * /api/v1/dice/ 1~mのサイコロをn個振る
 */
router.post("/", (req, res) => {
  const n = parseInt(String(req.body.n), 10);
  const m = parseInt(String(req.body.m), 10);

  if (isNaN(n) || n < 1 || n > 100) {
    res.status(400).send({
      message: "リクエストパラメータnに1以上100以下の数値を入れてください。",
    });
  }

  if (isNaN(m) || m < 2 || m > 10000) {
    res.status(400).send({
      message: "リクエストパラメータmに2以上10000以下の数値を入れてください。",
    });
  }

  res.status(200).send({ values: diceValues(n, m) });
});

/**
 * /api/v1/dice/cube/ 1~6のサイコロをn個振る
 */
router.get("/cube/", (req, res) => {
  const n = parseInt(String(req.query.n), 10);

  if (isNaN(n) || n < 1 || n > 100) {
    res.status(400).send({
      message: "クエリパラメータnに1以上100以下の数値を入れてください。",
    });
  }

  res.status(200).send({ values: diceValues(n, 6) });
});

module.exports = router;
