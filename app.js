var todo = []
var counter = 0


function addTodo(event)
{
    console.log("---CalladdTodoFunction-----")

    let tempTodoText = document.getElementById("todoText").value
    console.log("Text added: "+tempTodoText)

    console.log(todo) 
    let tempTodo = {
        id: counter++,
        text: tempTodoText,
    }
    
    todo.push(tempTodo)
    console.log(todo)

    
    document.getElementById("todoText").value = ""

    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    todo.forEach(element=>
        {
            todoList.innerHTML += "<li>"+element.text+" <button onclick=\"deleteTodo("+element.id+")\">Delete</button></li>"
        })


    }
    function deleteTodo(id)
    {
        console.log("----Delete todo-----")
        console.log("deleted id " +id)
        todo = todo.filter(element=>{
            return element.id != id 
        })

        let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""

    todo.forEach(element=>
        {
           return  todoList.innerHTML += "<li>"+element.text+" <button onclick=\"deleteTodo("+element.id+")\">Delete</button></li>"
        })
        console.log(todo)

        
    }

    function checkboxListener(id)
    {
        console.log("id: "+id)
    }
    

   