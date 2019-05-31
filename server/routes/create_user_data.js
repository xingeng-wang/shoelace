const express = require('express');
const uuidv4 = require('uuid/v4');

const router = express.Router();

/* GET a guid. */
router.post('/', function (req, res) {
  try {
    console.log(req.body);
    const id = uuidv4();
    const name= req.body.name;
    const template= req.body.template;
    const repeat= req.body.repeat;
    const isActivate= req.body.isActivate;
    const startDate= req.body.startDate;

    return res.status(200).json({name: 'xingeng'});
  } catch (e) {
    return res.status(200).json({error: e.message});
  }
});

module.exports = router;
