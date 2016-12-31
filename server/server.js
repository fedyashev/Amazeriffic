var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app;

var task_list = [
  {"text" : "Купить продукты"},
  {"text" : "Сходить в магазин"},
  {"text" : "Отправиться в поездку"}
];

app = express();
app.use(express.static("../client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
http.createServer(app).listen(3000);

app.get("/task.json", function (req, res) {
  res.json(task_list);
});

app.post("/add_task", function (req, res) {
  var task = req.body;
  if (task !== "") {
    task_list.push({"text" : task.text});
  }
  res.end();
});

console.log("Server start on port 3000");
