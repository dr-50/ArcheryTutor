var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shotprocess', (req,res)=>{
  res.render('shotprocess', { title: 'ArcheryTutor' });
    // res.send('hello there')
});


module.exports = router;
