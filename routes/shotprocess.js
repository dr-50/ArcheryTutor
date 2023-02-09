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
  res.render('shotprocess/shotsteps', { title: 'ShotSteps'})
  // res.send('Hello')
})

router.get('/closedloop', (req, res)=>{
  res.render('shotprocess/closedloop', { title: 'Tuning'})
  // res.send('Hello')
})

// router.get('/tbd', (req, res)=>{
//   res.render('shotprocess/tbd', { title: 'Tuning'})
//   // res.send('Hello')
// })

module.exports = router;
