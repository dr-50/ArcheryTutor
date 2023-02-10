var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=>{
  res.render('shotprocess/shotprocess', { title: 'ShotProces' })
})


// router.get('/shotprocess', (req,res)=>{
//   res.render('shotprocess/shotprocess', { title: 'ArcheryTutor' });
//     // res.send('hello there')
// });

router.get('/shotsteps', (req, res)=>{
  res.render('shotprocess/shotsteps', { title: 'ArcheryTutor:ShotProcess'})
  // res.send('Hello')
})


router.get('/basicform', (req, res)=>{
  res.render('shotprocess/basicform', { title: 'ArcheryTutor:ShotProcess'})
  // res.send('Hello')
})


router.get('/advancedform', (req, res)=>{
  res.render('shotprocess/advancedform', { title: 'ArcheryTutor:ShotProcess'})
  // res.send('Hello')
})
module.exports = router;
