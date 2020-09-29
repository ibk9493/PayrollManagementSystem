
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Grade = new Schema({
   
//
ID: {
    type: String
  },
  Class: {
    type: String
  },
  BasicPay: {
    type:String
  },
  Salary: {
    type: String
  },
    MedicalAllowance: {
      type: String
    },
    LivingAllowance: {
      type: String
    },
    TravellingAllowance: {
      type: String
    }
//
  }
,
{
    collection: 'class'
});


module.exports = mongoose.model('class', Grade);