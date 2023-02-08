var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/training', function(req, res, next) {
  res.render('training', { title: 'ArcheryTutor' });
});


module.exports = router;
