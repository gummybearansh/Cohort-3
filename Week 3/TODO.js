
ctr = 0;

function deleteButton(cnt){
    document.querySelector("#todo-"+cnt).parentNode.removeChild(document.querySelector("#todo-"+cnt));
}
function addToDo(){
    const inputEl = document.querySelector("#inputBox");
    const inputVal = inputEl.value;

    const toDoItem = document.createElement("span");
    toDoItem.setAttribute("id", "todo-"+ctr);
    toDoItem.setAttribute("style", "display: flex;");

    const toDoVal = document.createElement("h4");
    toDoVal.innerHTML = inputVal;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", `deleteButton(${ctr})`)
    deleteBtn.innerHTML = "Delete To Do";
    deleteBtn.setAttribute("style", "margin-left: 50px; height: 30px; margin-top: 12px")


    toDoItem.appendChild(toDoVal);
    toDoItem.appendChild(deleteBtn);

    document.querySelector("#toDoContainer").appendChild(toDoItem);
    ctr ++;
}
