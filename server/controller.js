const db = require("../database/model.js");
const axios = require("axios");

exports.get = (req, res) => {
  console.log("in get!");
  db.findAll({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
};

exports.post = (req, res) => {
  console.log("in post!");
  var {mock} = req.body;
    db.create({
      mock
    })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.error(err));
};
