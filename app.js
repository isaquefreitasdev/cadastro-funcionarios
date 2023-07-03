const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employes = require("./models/employe");
const routes = require("./routes/routes")

mongoose
  .connect(
    "mongodb+srv://isaquedbaltas:Z7JPrMaIQ7WMVN2d@cluster0.xpzhlhu.mongodb.net/funcionarios"
  )
  .then(() => {
    console.log("connect to server");
  });

app.use('/',routes)

  

app.listen(3000, () => {
  console.log("listening on port 3000");
});
