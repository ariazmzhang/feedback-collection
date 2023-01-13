const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req, res){
  // console.log(request);
  res.send("bybye");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
