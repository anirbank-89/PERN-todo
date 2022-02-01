var express = require('express');

var router = express.Router();

var TodoController = require('../controllers/Todo');

router.post('/todo', TodoController.addData);
router.get('/todo', TodoController.getAllData);
router.get('/todo/:id', TodoController.getDataById);
router.put('/todo/:id', TodoController.editData);
router.delete('/todo/:id', TodoController.deleteData);

module.exports = router;