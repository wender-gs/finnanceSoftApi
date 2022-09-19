const Users = require('../models/users');
const async = require('async');
const { body, validationResult } = require("express-validator");


exports.users_create = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body('email')
    .trim()
    .isLength({ min: 6 })
    .escape(),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .escape(),
  (req, res) => {
    const errors = validationResult(req);

    const users = new Users({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    users.save();

    return res.json({ log: "created with success"});
  }
];

exports.users_list = (req, res) => {
  Users.find({}, "username email").exec(function (err, users) {
    res.json(users);
  });
};

exports.users_edit = (req, res) => {
  res.json({ msg: "Editando usuario" });
};

exports.users_delete = (req, res) => {
  res.json({ msg: "Deleteando usuario" });
};

