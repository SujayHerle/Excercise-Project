const express = require('express');
const hbs=require('hbs');

const port=process.env.PORT || 3000;
var app = express();

app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  //res.send('<h1>Express</h1>');
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'Welcome to home page'
  });
});

app.listen(port,()=>{
  console.log("Port"+port);
});
