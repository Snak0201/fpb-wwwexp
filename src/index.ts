import express from "express";
import bodyParser from "body-parser";

const app: express.Express = express();
const port = 3003;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api/v1/dice", require("./routes/api/v1/dice"));

app.listen(port, () => {
  console.log(`API Server listening on port ${port}`);
});
