/// depndencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const route = require("./serve/route");
const path = require("path");

/// database
mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("success connection to DB"))
  .catch((error) => console.log(error.reason));

/// server
const app = express();

app.use(bodyParser.json());
app.use("/cut", route);

app.use(express.static(path.join(__dirname, "./public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/./public/index.html`));
});

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:" + config.PORT);
});
