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
      .catch(err => console.log(err));
};

exports.check=(req,res)=>{
  let query = req.body
  console.log('in check get!', req.body.email)
  db.findAll({
    where:{email: query.email, 
    password: query.password}
  })
  .then(data =>{
    console.log(data)
    res.status(201).send(data)
  })
  .catch(err => console.log(err))
}

exports.update=(req,res)=>{
  console.log('in update', req.body)

  db.update(
    {company: req.body.company,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state},
    {where:{email: req.body.user.email}}
  )
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch(err=>console.log(err))
}
