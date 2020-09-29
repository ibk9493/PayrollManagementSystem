const express = require('express');
const app = express();
const GradeRoutes = express.Router();
// Require Employee model in our routes module
let Grade = require('../models/grade');



GradeRoutes.route('/add').post(function (req, res) {
    
    let grade = new Grade(req.body);
    grade.save()
      .then(grade => {
        res.status(200).json({'Grade': 'Grade in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  GradeRoutes.route('/').get(function (req, res) {
    Grade.find(function (err, grade){
    if(err){
      console.log(err);
    }
    else {
      res.json(grade);
    }
  });
});
//  Defined update route
GradeRoutes.route('update/:id').post(function (req, res) {
  Grade.findById(req.params.id, function(err, next, grade) {
  if (!grade)
    return next(new Error('Could not load Document'));
  else {

    Grade.save().then(grade => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

// Defined delete | remove | destroy route
GradeRoutes.route('delete/:id').delete(function (req, res) {
  Grade.findByIdAndRemove({_id: req.params.id}, function(err, grade){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


module.exports = GradeRoutes;