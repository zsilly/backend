var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const{username,password}=req.body;
  if(username ==='jose@iesb.br'&& password==='abcd1234'){
    return res.json({token: "pipipipopopo"});
  }
  return res.status(401).json({msg:"credencial invalida"});

});

module.exports = router;
