var todo = []


function addTodo(event)
{
    console.log("---CalladdTodoFunction-----")

    let tempTodoText = document.getElementById("todoText").value
    console.log("Text added: "+tempTodoText)

    console.log(todo)
    todo.push(tempTodoText)
    console.log(todo)

    
    document.getElementById("todoText").value = ""

    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    todo.forEach(element=>
        {
            todoList.innerHTML += "<li>"+element+"</li>"
        })


    }

   