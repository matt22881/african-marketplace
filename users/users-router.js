const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/middleware/restricted-middleware.js");
const verifyUserId = require("../auth/middleware/verifyUserId-middleware.js");

//get all users if the user is a seller
//if they are a buyer they can only see other buyers.
router.get("/", restricted, (req, res) => {
  const department = req.jwtToken.department;
  if (department === null) {
    res.status(400).json({ message: "department not valid or missing" });
  } else {
    Users.find(department)
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  }
});

//get a user
router.get("/:id", verifyUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      const { username, department } = user;
      res.status(200).json({ username, department });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//get a users items
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

//delete a user by id
router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(deletedUser => {
      res.status(200).json({ message: "User successfully deleted." });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
