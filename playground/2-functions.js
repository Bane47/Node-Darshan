const tasks ={
    tasks:[{
        text:'Grocery Shopping',
        completed:true
    },
{
    text:'Clean yard',
    completed:false
},{
    text:'Film course',
    completed:false
}]
}

// console.log(tasks.getTaskToDo())


getTaskToDo=()=>{
var tasksToDo = tasks.tasks.filter((tasks)=>{
    return !tasks.completed
})
  console.log(tasksToDo);
}


getTaskToDo();