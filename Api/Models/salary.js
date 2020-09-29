// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Payroll


let MonthlySal = new Schema({
  EmpID: {
    type: String
  },
  
  BankAcc: {
    type: String
  },
  Salary: {
    type: String
  },
  Leave: {
    type: String
  },
  Month: {
    type: String
  }
},
{
    collection: 'MonthlySal'
});

module.exports = mongoose.model('MonthlySal', MonthlySal);