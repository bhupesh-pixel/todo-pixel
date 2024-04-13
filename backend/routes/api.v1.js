var express = require('express');
const todoController = require('../controllers/todoController');
var router = express.Router();

/* GET api path. */
router.get('/', function(req, res, next) {
  res.send("Welcome to V1 APIs for Notes Application");
});

router.get('/todos',todoController.getTodoAll)
router.get('/todos/:id',todoController.getTodoByID)
router.post('/todos/create',todoController.createTodo)
router.put('/todos/update/:id',todoController.updateTodoByID)
router.delete('/todos/delete/:id', todoController.deleteTodoByID)
module.exports = router;
