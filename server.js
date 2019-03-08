const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/credentials.json");

const ItemResource = require("./routes/ItemResource");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/item", ItemResource);
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("mongoDB connected"))
  .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
