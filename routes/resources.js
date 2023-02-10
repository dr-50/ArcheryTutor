var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('resources/resources', { title: 'ArcheryTutor:Resources' });
});

module.exports = router;
