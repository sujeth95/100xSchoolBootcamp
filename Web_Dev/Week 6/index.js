let todoIndex = 0;

function addTodo() {
    // write the code that reads the contents of the input box
    // creates a new todo on the html dom
    // Step 1 -> create a new div element in js (as a variable)
    // Step 2 -> insert that div element to a parent div
    // clear the input box

    // const element = document.getElementById("todoInput").value;

    // const newDiv = document.createElement("div");  // This creates a new div which contains the value of input box.
    // newDiv.innerHTML = "<span>" + element + "</span> <button> Delete Todo </button>" ;

    // const parentDiv = document.getElementById("todos");
    // parentDiv.appendChild(newDiv);


    // Another Approach----
    const element = document.getElementById("todoInput");
    const todo = element.value;
    if(todo === ""){
        return;
    }
    element.value = "";     // to clear the input box after adding a todo.

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo" + todoIndex);

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan);

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "Delete Todo";
    todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");

    todoDiv.appendChild(todoButton);

    document.getElementById("todos").appendChild(todoDiv);
    todoIndex = todoIndex + 1;
}

function deleteTodo(index) {
    const divElement = document.getElementById("todo" + index);
    divElement.parentElement.removeChild(divElement);

    // alternatively -> another way of writing (divElement.parentElement.removeChild(divElement);)
    // document.getElementById("todos").removeChild(divElement);
}