const todoService = require("../services/todoService");

const todoController =  {
    async createTodo(req,res){
        try{
            const newTodo = await todoService.create(req.body);
            res.status(201).json(newTodo);
        }catch (err){
            res.status(500).json({error : err.message});
        }
    },
    async deleteTodoByID(req,res){
        try{
            const deleteTodo = await todoService.deleteByID(req.params?.id);
            res.status(201).json(deleteTodo);
        }catch (err){
            res.status(500).json({error : err.message});
        }
    },
    async getTodoByID(req,res){
        try{
            const getTodo = await todoService.getByID(req.params?.id);
            res.status(201).json(getTodo);
        }catch (err){
            res.status(500).json({error : err.message});
        }
    },
    async getTodoAll(req,res){
        try{
            const getAllTodo = await todoService.getAll();
            res.status(201).json(getAllTodo);
        }catch (err){
            res.status(500).json({error : err.message});
        }
    },
    async updateTodoByID(req,res){
        try{
            const updateTodo = await todoService.updateByID(req.params?.id, req?.body);
            res.status(201).json(updateTodo);
        }catch (err){
            res.status(500).json({error : err.message});
        }
    },
}

module.exports = todoController;