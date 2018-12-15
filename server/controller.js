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
  console.log("in post!", req.body.user);
  // var {mock} = req.body;
    db.create({
      firstname: req.body.user.firstName,
      lastname: req.body.user.lastName,
      email: req.body.user.email,
      password: req.body.user.password,
      zipcode: req.body.user.zipcode
    })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.error(err));
};
