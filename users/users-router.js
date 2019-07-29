const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  console.log('req.jwtToken', req.jwtToken)
  const department = req.jwtToken.department
  if (department === null) {
    res.status(400).json({message: "department not valid or missing"})
  } else {
    Users.find(department)
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  }
});

module.exports = router;