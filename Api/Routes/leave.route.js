const express = require('express');
const app = express();
const LeaveRoutes = express.Router();
// Require Employee model in our routes module
let Leave = require('../models/leave');



LeaveRoutes.route('/add').post(function (req, res) {
    
    let leave = new Leave(req.body);
    leave.save()
      .then(leave => {
        res.status(200).json({'Leave': 'Leave in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
  LeaveRoutes.route('/').get(function (req, res) {
    Leave.find(function (err, leave){
    if(err){
      console.log(err);
    }
    else {
      res.json(leave);
    }
  });
});
// Defined edit route
LeaveRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Leave.findById(id, function (err, leave){
      res.json(leave);
  });
});

//  Defined update route
LeaveRoutes.route('update/:id').post(function (req, res) {
  Leave.findById(req.params.id, function(err, next, leave) {
  if (!leave)
    return next(new Error('Could not load Document'));
  else {
    leave.save().then(leave => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

// Defined delete | remove | destroy route
LeaveRoutes.route('delete/:id').delete(function (req, res) {
  Leave.findByIdAndRemove({_id: req.params.id}, function(err, leave){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = LeaveRoutes;