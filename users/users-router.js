const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/middleware/restricted-middleware.js');
const verifyUserId = require('../auth/middleware/verifyUserId-middleware.js')

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

router.get("/:id", verifyUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id/items", restricted, verifyUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      Users.getItemsByUserId(id)
        .then(items => {
          res.status(200).json({ ...user, items });
          console.log(user, items);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;