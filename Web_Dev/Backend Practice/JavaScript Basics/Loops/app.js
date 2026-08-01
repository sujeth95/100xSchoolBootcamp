let todoIndex = 0; 

function addTodo() {
    // Extracting the input value from input box.
    const element = document.getElementById("todoInput");
    const todo = element.value;
    element.value = "";

    // Creating div tag
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", `todo${todoIndex}`)

    // Creating span tag and getting the value of the input box.
    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;

    // Appending the value of span tag into div tag.
    todoDiv.appendChild(todoSpan);

    // Creating the delete button.
    const todoButton = document.createElement("button");
    todoButton.innerHTML = "Delete Todo"
    todoButton.setAttribute("onclick", `deleteTodo(${todoIndex})`);

    // Appending Delete button into the div tag.
    todoDiv.appendChild(todoButton);

    // Appending the div into the parent div.
    document.getElementById("parentDiv").appendChild(todoDiv);

    todoIndex++;
}

// Logic to delete a todo.
function deleteTodo(index) {
    const divElement = document.getElementById("todo" + index)
    divElement.parentElement.removeChild(divElement);

    // alternatively
    // document.getElementById("todos").removeChild(divElement);
}