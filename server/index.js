const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
//const Axios = require('axios');

const PORT = 5000;

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/user', (req,res)=>{
    console.log('in get!')
})

app.post('/user', (req, res)=>{
    console.log('in post!')
})

app.listen(PORT, function(){
    console.log(`successfully listening on ${PORT}!`)
})
