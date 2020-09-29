
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Leave = new Schema({
Employee: {
type: String
},
FromDate: {
  type: String
},
FromDate: {
  type: String
},
Days: {
  type: String
},
Reason: {
  type: String
}
},
{
    collection: 'Leave'
});

module.exports = mongoose.model('Leave', Leave);