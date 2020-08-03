var express = require('express');
var router = express.Router();
var validator = require("express-validator");
var fs = require("fs");

var checks = [
  validator.check("rut").not().isEmpty(),
  validator.check("celular").not().isEmpty(),
  validator.check("email").not().isEmpty(),
  validator.check("renta").not().isEmpty(),
];

var validate = (req, res) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  fs.writeFile('./output/' + req.body.rut + '.txt', JSON. stringify(req.body), (error) => {
    res.status(200).json({ status: "ok" });
  });
};

router.post('/', checks, validate);

module.exports = router;
