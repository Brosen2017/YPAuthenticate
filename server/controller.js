const db = require("../database/model.js");
const bcrypt = require("bcrypt");
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
  bcrypt.hash(req.body.user.password, 5, function(err, hash) {
    db.create({
      firstname: req.body.user.firstName,
      lastname: req.body.user.lastName,
      email: req.body.user.email,
      password: hash,
      zipcode: req.body.user.zipcode
    })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log(err));
    })
};

// exports.check=(req,res)=>{
//   let query = req.body

//   db.findAll({
//     where:{email: query.email, 
//     password: query.password}
//   })
//   .then(data =>{
//     console.log(data)
//     res.status(201).send(data)
//   })
//   .catch(err => console.log(err))
// }

exports.check=(req,res)=>{
  let query = req.body

  db.findAll({
    where:{email: query.email}
  })
  .then(data =>{
    console.log(data[0].password)
    bcrypt.compare(query.password, data[0].password, function(err, check) {
      console.log('in hash', check)
      if(check === true){
        res.status(200).send(data)
      } else {
        res.status(200).send([])
      }
    })
    .catch(err=>console.log(err))
  })
  .catch(err => console.log(err))
}

exports.update=(req,res)=>{
  console.log('in update', req.body)

  db.update(
    {company: req.body.company,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    website: req.body.website,
    photo: req.body.photo},
    {where:{email: req.body.user.email}}
  )
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch(err=>console.log(err))
}
