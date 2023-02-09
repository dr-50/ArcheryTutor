var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/training', function(req, res, next) {
  res.render('training/training', { title: 'ArcheryTutor' });
});


router.get('/indoor', function(req, res) {
  res.render('training/indoor', { title: 'ArcheryTutor:Training' });
});

router.get('/outdoor', function(req, res) {
  res.render('training/outdoor', { title: 'ArcheryTutor:Training' });
});

router.get('/3d', function(req, res) {
  res.render('training/3d', { title: 'ArcheryTutor:Training' });
});



module.exports = router;
