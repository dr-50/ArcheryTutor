var express = require('express');
var router = express.Router();

/* GET tuning page. */
router.get('/tuning', function(req, res, next) {
    res.render('tuning', { title: 'ArcheryTutor' });
});


module.exports = router;