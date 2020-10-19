const e = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/set-cookie', function(req, res, next) {
  try {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.cookie('cokkieName','secret', {  secure:true ,sameSite:'none'})
    console.log('cookie have created successfully');
    res.send();
  }
  catch(err){
    console.log(err)
  }
});


router.get('/check-cookie', function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('checking');
  console.log(req.headers);
  if(req.headers.cookie && req.headers.cookie.includes('cokkieName')){
    console.log('enabled')
    res.send({ enabled: true });
  }
  else{
    console.log('disabled');
    res.send({ enabled: false });
  }
});



module.exports = router;
