let countIndex = 0;

function addTodo() {
    const element = document.getElementById("inputTodo");
    const todo = element.value;
    if(todo === ""){
        return;
    }
    element.value = "";

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo" + countIndex);

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan);

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "Delete Todo";
    todoButton.setAttribute("onclick", "deleteTodo(" + countIndex + ")");

    todoDiv.appendChild(todoButton);

    document.getElementById("todos").appendChild(todoDiv);
    countIndex = countIndex + 1;
}

function deleteTodo(index) {
    const divElement = document.getElementById("todo" + index);
    divElement.parentElement.removeChild(divElement);
}