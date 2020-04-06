const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const { mongoose }=require('./db.js');
var employeeController=require('./controllers/employeeController.js');

var app=express();
app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//     });
app.listen(3000,()=>console.log('server started at port:3000'));

app.use('/employees',employeeController);