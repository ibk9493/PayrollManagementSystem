const express=require('express')
const path=require('path')
const http = require('http');
const mongoose=require('mongoose');
const config=require('./db');
//emberRoute=require('./routes/memberroute');

const employeeRoute = require('./routes/employee.route');
const gradeRoute = require('./routes/grade.route');
const salaryRoute = require('./routes/salary.route');
const leaveRoute = require('./routes/leave.route');

mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useUnifiedTopology:true,useNewUrlParser:true})
.then(
    ()=>{console.log('Database is connected') },
    err=>{console.log('Cannot connect to the database'+ err) }  
);


const bodyParser=require('body-parser')
const cors=require('cors')

const app=express();
app.use(bodyParser.json());
app.use(cors());
//app.use('/members',memberRoute);
app.use('/employee', employeeRoute);
app.use('/grade', gradeRoute);
app.use('/salary', salaryRoute);
app.use('/leave', leaveRoute);

let port=process.env.PORT || 4000;
const hostname='localhost'

const server=http.createServer((req,res)=>{
  res.statusCode=200;
});
app.listen(port,function(){
  console.log('listening on port '+ port);
});