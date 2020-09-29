const express = require('express');
const app = express();
const SalaryRoutes = express.Router();
// Require Employee model in our routes module
let Salary = require('../models/salary');



SalaryRoutes.route('/add').post(function (req, res) {
    
    let salary = new Salary(req.body);
    salary.save()
      .then(salary => {
        res.status(200).json({'Salary': 'Salary in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  SalaryRoutes.route('/').get(function (req, res) {
    Salary.find(function (err, salary){
    if(err){
      console.log(err);
    }
    else {
      res.json(salary);
    }
  });
});

// Defined edit route
SalaryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Salary.findById(id, function (err, salary){
      res.json(salary);
  });
});

//  Defined update route
SalaryRoutes.route('update/:id').post(function (req, res) {
  Salary.findById(req.params.id, function(err, next, salary) {
  if (!salary)
    return next(new Error('Could not load Document'));
  else {
    salary.save().then(salary => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

// Defined delete | remove | destroy route
SalaryRoutes.route('delete/:id').delete(function (req, res) {
  Salary.findByIdAndRemove({_id: req.params.id}, function(err, salary){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = SalaryRoutes;