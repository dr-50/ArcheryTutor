var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('setup/setup', { title: 'ArcheryTutor:Setup' });
});

//dloop router
router.get('/dloop', (req, res)=>{
  res.render('setup/dloop', { title: 'ArcheryTutor:Setup'})
  // res.send('Hello')
})

router.get('/sight', (req, res)=>{
  res.render('setup/sight', { title: 'ArcheryTutor:Setup'})
  // res.send('Hello')
})

router.get('/rest', (req, res)=>{
  res.render('setup/rest', { title: 'ArcheryTutor:Setup'})
  // res.send('Hello')
})

router.get('/stabalizer', (req, res)=>{
  res.render('setup/stabalizer', { title: 'ArcheryTutor:Setup'})
  // res.send('Hello')
})



module.exports = router;
