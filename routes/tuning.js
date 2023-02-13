var express = require('express');
var router = express.Router();

/* GET tuning page. */
router.get('/', function(req, res) {
    res.render('tuning/tuning', { title: 'ArcheryTutor:Tuning' });
});

router.get('/bareshaft', function(req, res) {
    res.render('tuning/bareshaft', { title: 'ArcheryTutor:Tuning' });
});

router.get('/torque', function(req, res) {
    res.render('tuning/torque', { title: 'ArcheryTutor:Tuning' });
});

router.get('/group', function(req, res) {
    res.render('tuning/group', { title: 'ArcheryTutor:Tuning' });
});

router.get('/walkback', function(req, res) {
    res.render('tuning/walkback', { title: 'ArcheryTutor:Tuning' });
});
module.exports = router;