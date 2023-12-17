const tasks = []

constmyForm=document.addTasksForm;
const input = myFrom.myInput;
const listTasks = document.getElementById ("listTasks")
myFrom.addEventListener('sumit', addTasks)

function addTasks (e){
    e.preventDefault();
    if (input.value === ""|| input.value === ""){
        alert("plase add proper todo")
        return;
    }
    listTasks.innerHTML = ""; 
    tasks.push(input.value);// console.log(tasks);
 
    const ul = document.createElement("ul");
    listTasks.append(ul);
    for (let todo of tasks ){
    const newTodo = document.createElement("li");
    const button= document.createElement ("button");
       button.textContent= "x"

       button.addEventListener("click", function(){
        let position = tasks.indexOf(todo);
        tasks.splice(position,1) 
        newTodo.remove();
        addTasks(e)
    });  

    newTodo.textContent = todo;
    newTodo.append(button);
    ul.append(button,newTodo); 

    }
    input.value = "";
}