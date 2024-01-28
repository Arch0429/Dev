// Express.js 란?
// Node js 를 이용해서 웹 프레임워크를 만들 수 있다.
// 클라이언트에서 보내는 "요청" 을 "응답"으로 돌려주는 역할.

const express = require("express");
var cors = require("cors");
const app = express();
const port = 3002;

app.use(cors());

// HTTP 메소드 : get/post... || 라우팅 : '/' || CallBack Function : function(req, res).....
app.get("/", function (req, res) {
  res.send("Hello Node!!");
});

app.get("/user/:id/:team", function (req, res) {
  var params = req.params;
  console.log(`params : ${JSON.stringify(params)}`);
  var query = req.query;
  console.log(`query : ${JSON.stringify(query)}`);

  res.json({
    "pId" : params["id"],
    "pTeam" : params["team"],
    "qName" : query["name"],
    "qAge" : query["age"],
  });
});

app.get("/sound/:name", function (req, res) {
//   var name = req.params["name"];
  // var { name } = req.params;
  var { name } = req.params;

  console.log(name);

  if(name == "dog") {
    res.send("멍멍");
    
  }else if (name == "cat") {
    res.send("야옹임")
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
