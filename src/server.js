/// depndencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config";
import route from "./serve/route";
/// database
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

/// server
const app = express();

app.use(bodyParser.json());
app.use("/api", route);
app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:" + config.PORT);
});
