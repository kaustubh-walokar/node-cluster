var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/:userName', function(req, res, next) {
  
  User.findOne({"username":req.params.userName},function(err,u){
    if(err){
      res.status(404).send({'error':err,'body':req.body});
      console.log(err.message, err.stack);
      return;
    }
    console.log(u);
    res.send(u);    
  });
  
});

router.post('/',function(req,res,next){

  var u = new User(req.body);
  u.save(function(err){
    if(err){
      res.status(400).send({'error':err,'body':req.body});
      console.log(err.message, err.stack);
      return;
    }

    res.status(201).send(req.body);
  });
});

module.exports = router;
