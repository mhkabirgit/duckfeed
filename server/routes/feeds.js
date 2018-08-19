var express = require('express');
var router = express.Router();

var foodtypeController = require('../controllers/foodtypeController');
var foodController = require('../controllers/foodController');
var feedController = require('../controllers/feedController');
var scheduleController = require('../controllers/scheduleController');

router.get('/foodtype/all',foodtypeController.all);
router.get('/foodtype/detail/:id',foodtypeController.detail);
router.post('/foodtype/add',foodtypeController.add);
router.post('/foodtype/update/:id',foodtypeController.update);
router.post('/foodtype/delete/:id',foodtypeController.delete);

router.get('/food/all', foodController.all);
router.get('/topfoodtypes', foodController.topfoodtypes);
router.get('/food/detail/:id', foodController.detail);
router.post('/food/add', foodController.add);
router.post('/food/update/:id', foodController.update);
router.post('/food/delete/:id', foodController.delete);

router.get('/feed/all', feedController.all);
router.get('/topfoods', feedController.topfoods);
router.get('/feed/detail/:id', feedController.detail);
router.post('/feed/add', feedController.add);
router.post('/feed/update/:id', feedController.update);
router.post('/feed/delete/:id', feedController.delete);

router.get('/schedule/all', scheduleController.all);
router.get('/schedule/detail/:id', scheduleController.detail);
router.post('/schedule/add', scheduleController.add);
router.post('/schedule/update/:id', scheduleController.update);
router.post('/schedule/delete/:id', scheduleController.delete);

router.post('/schedule/confirm/:id', scheduleController.confirm);
router.post('/schedule/cancel/:id', scheduleController.cancel);

module.exports=router;
