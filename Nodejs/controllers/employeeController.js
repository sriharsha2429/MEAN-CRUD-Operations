const express=require('express');
var router=express.Router();
var {Employee}=require('../models/employee');
module.exports=router;
var ObjectId=require('mongoose').Types.ObjectId;

//localhost:3000/employees/
//getall
router.get('/',(req,res)=>
{
    Employee.find((err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log("Error in retrieving files"+JSON.stringify(err,undefined,2));
        }
    });
});


//getById

router.get('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Id is not found ${req.params.id}`);
    Employee.findById(req.params.id,(err,doc)=>
    {
        if(!err)
        {
            res.send(doc);
        }
        else{
            console.log("error in retireving employee"+JSON.stringify(err,undefined,2));
        }
    })
})





//insert
router.post('/',(req,res)=>
{
   var emp= new Employee({
       name:req.body.name,
       position:req.body.position,
       office:req.body.office,
       salary:req.body.salary
   });
   emp.save((err,doc)=>{
       if(!err)
       {
           res.send(doc);
       }
       else{
           console.log("error in employee addition"+JSON.stringify(err,undefined,2));
       }
   });
});





//update
router.put('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Id is not found ${req.params.id}`);
    var emp={
       name:req.body.name,
       position:req.body.position,
       office:req.body.office,
       salary:req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>
    {
        if(!err)
        res.send(doc);
        else
        console.log("error in employee update"+JSON.stringify(err,undefined,2));
    })
})

//delete
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Id is not found ${req.params.id}`);
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>
    {
        if(!err)
        {
            res.send(doc);
        }
        else
        console.log("error in employee update"+JSON.stringify(err,undefined,2));
    })

})