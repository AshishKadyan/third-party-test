const e = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/set-cookie', function(req, res, next) {
  try {
    res.cookie('cokkieName','secret', {  secure:true ,sameSite:'none'})
    console.log('cookie have created successfully');
    res.send();
  }
  catch(err){
    console.log(err)
  }
});


router.get('/check-cookie', function(req, res, next) {
  console.log('checking');
  if(req.headers.cokkiename){
    console.log('enabled')
    res.send('enabled');
  }
  else{
    console.log('disabled');
    res.send("disabled")
  }
});



module.exports = router;
