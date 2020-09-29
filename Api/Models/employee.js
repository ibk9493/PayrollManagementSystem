
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business

///
let Employee = new Schema(
  {
  ID: {
    type: String
  },
  name: {
    type: String
  },
  Address: {
    type: String
  },
  Salary: {
    type: String
  },
  Class: {
    type: String
  },
  Designation: {
    type: String
}
}
, 
    {
    collection: 'Employee'
});


module.exports = mongoose.model('Employee', Employee);