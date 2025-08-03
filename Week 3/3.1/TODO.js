function addTODO(){
    const todoitems = document.querySelectorAll(".todoitem");
    const todonum = todoitems.length+1;

    const inputElement = document.querySelector("input");
    const inputValue = inputElement.value;

    const newToDo = document.createElement("div");
    newToDo.setAttribute("id", `todo-${todonum}`);
    newToDo.setAttribute("class", "todoitem");

    const newToDoContent = document.createElement("h4")
    newToDoContent.innerHTML = inputValue;
    const newToDoButton = document.createElement("button");
    newToDoButton.setAttribute("onclick", `deleteToDo(${todonum})`);
    newToDoButton.innerHTML = "Mark as Done";

    newToDo.appendChild(newToDoContent);
    newToDo.appendChild(newToDoButton);

    document.querySelector("#todolist").appendChild(newToDo);
}

function deleteToDo(index){
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
}
