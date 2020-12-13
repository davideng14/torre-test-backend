var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/bio/:username', function(req, res, next) {
  fetch(`https://torre.bio/api/bios/${req.params.username}`)
  .then(res => res.json())
  .then(data => {
    res.send(data);
  });
});

module.exports = router;
