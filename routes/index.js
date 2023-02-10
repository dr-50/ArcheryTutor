const express = require('express');
const router = express.Router();


const usersRouter = require('./users');
const tuningRouter = require('./tuning');
const shotProcessRouter = require('./shotprocess');
const trainingRouter = require('./training');
const resourceRouter = require('./resources');
const referenceRouter = require('./references');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ArcheryTutor' });
});

// shotprocess route
router.use('/shotprocess', shotProcessRouter);

// tuning route
router.use('/tuning', tuningRouter);

// training route
router.use('/training', trainingRouter);

// resources route
router.use('/resources', resourceRouter);

// references route
router.use('/references', referenceRouter);

module.exports = router;
