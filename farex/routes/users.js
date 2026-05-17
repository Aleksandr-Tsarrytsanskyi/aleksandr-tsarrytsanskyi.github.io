var express = require('express');
var router = express.Router();
const mysql = require("mysql");

/* GET users listing. */
router.get('/', function(req, res, next) {
 const conn = mysql.createConnection({
    host: "MySQL-8.4",
    user: "root",
    database: "products",
    password: "",
  });

     conn.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(" Database OK");
      }
    });

     let query = "SELECT * FROM `product` WHERE 1";

     conn.query(query, (err, result) => {
          // const user = result.find((user) => user.email === req.body.mail);
          // console.log(err);
          // console.log(result);
          res.json(result);
          
        });

        conn.end(err => {
          if (err) {
        console.log(err);
      } else {
        console.log(" Database close");
      }
        })
});

module.exports = router;
