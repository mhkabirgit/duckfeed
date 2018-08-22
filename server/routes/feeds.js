var express = require('express');
var router = express.Router();

var foodtypeController = require('../controllers/foodtypeController');
var foodController = require('../controllers/foodController');
var feedController = require('../controllers/feedController');
var scheduleController = require('../controllers/scheduleController');

var sessionChecker = (req, res, next) => {
  if(req.session.user && req.cookies.user_sid) {
    return next();
  }
  else {
      res.status(401).json({error: 'Unauthorized'});
  }
};


router.get('/foodtype/all',foodtypeController.all);
router.get('/foodtype/detail/:id', sessionChecker, foodtypeController.detail);
router.post('/foodtype/add', sessionChecker, foodtypeController.add);
router.post('/foodtype/update/:id', sessionChecker, foodtypeController.update);
router.post('/foodtype/delete/:id',  sessionChecker, foodtypeController.delete);

router.get('/food/all', foodController.all);
router.get('/topfoodtypes',  sessionChecker, foodController.topfoodtypes);
router.get('/food/detail/:id',  sessionChecker, foodController.detail);
router.post('/food/add',  sessionChecker, foodController.add);
router.post('/food/update/:id',  sessionChecker, foodController.update);
router.post('/food/delete/:id',  sessionChecker, foodController.delete);

router.get('/feed/all', feedController.all);
router.get('/topfoods',  sessionChecker, feedController.topfoods);
router.get('/feed/detail/:id',  sessionChecker, feedController.detail);
router.post('/feed/add',  sessionChecker, feedController.add);
router.post('/feed/update/:id',  sessionChecker, feedController.update);
router.post('/feed/delete/:id',  sessionChecker, feedController.delete);

router.get('/schedule/all',  scheduleController.all);
router.get('/schedule/detail/:id',  sessionChecker, scheduleController.detail);
router.post('/schedule/add',  sessionChecker, scheduleController.add);
router.post('/schedule/update/:id',  sessionChecker, scheduleController.update);
router.post('/schedule/delete/:id',  sessionChecker, scheduleController.delete);

router.post('/schedule/confirm/:id',  sessionChecker, scheduleController.confirm);
router.post('/schedule/cancel/:id',  sessionChecker, scheduleController.cancel);

module.exports=router;
