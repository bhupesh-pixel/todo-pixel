
let todoData = [];
// demonstrating CRUD
const todoService ={
    // C- create
    async create(data){
        try{
            return await (todoData.push(data))?todoData.find(item => item.id === data.id):null;
        }catch (err){
            throw new Error('error : Creating TODO ',err);
        }
     },
    //  D- delete
     async deleteByID(id){
        try{
            const toRemove = await todoData.find(data => data.id == id);
            todoData = await todoData.filter(item => item?.id != id );
            return (!todoData.includes(toRemove))? true: false;
        }catch (err){
            throw new Error('error : Deleting TODO ',err);
        }
     },
    //  R- retrive
     async getByID(id){
        try{
            console.log('=>',id)
            const toRetrive = await todoData.find(data => data.id == id);
            console.log('=>',toRetrive)
            return toRetrive;
        }catch (err){
            throw new Error('error : Retriving TODO ',err);
        }
     },
     async getAll(){
        try{
            return await todoData;
        }catch (err){
            throw new Error('error : Retriving TODO ',err);
        }
     },
    //  U- update
    async updateByID(id,data){
        try{
            const toUpdate = await todoData.find(data => data.id == id);
            Object.keys(data).forEach(key =>{
                if(toUpdate.hasOwnProperty(key)){
                    toUpdate[key] = data[key];
                }
            })
            return toUpdate;
        }catch (err){
            throw new Error('error : Updating TODO ',err);
        }
     },
};

module.exports = todoService;