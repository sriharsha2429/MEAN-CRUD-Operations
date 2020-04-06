const mongoose=require('mongoose');
var Employee=mongoose.model('Employee',{
    name: { type : String},
    position: { type : String},
    office: { type : String},
    salary : { type : Number}

});
module.exports = {Employee};
//module.exports = {Employee:Employee}
//we have to pass it as a object;