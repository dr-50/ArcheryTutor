var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('references/references', { title: 'ArcheryTutor:References' });
});

module.exports = router;