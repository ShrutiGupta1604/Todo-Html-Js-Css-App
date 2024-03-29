var todo = []
var counter = 0

//this flag tells us that we are editing a Todo
//This will also tell us which Todo we are editing
var editingFlag= -1

function addTodo(event)
{
    console.log("---CalladdTodoFunction-----")

    let tempTodoText = document.getElementById("todoText").value
    console.log("Text added: "+tempTodoText)

    console.log(todo) 
    let tempTodo = {
        id: counter++,
        text: tempTodoText,
        completed:  false,
    }
    
    todo.push(tempTodo)
    console.log(todo)

    
    document.getElementById("todoText").value = ""

    updateFrontend()

}


    function deleteTodo(id)
    {
        console.log("----Delete todo-----")
        console.log("deleted id " +id)
        todo = todo.filter(element=>{
            return element.id != id 
        })

         
        updateFrontend()
        
    }

    function checkboxListener(id)
    {
        console.log("----checkboxListener call-----")
        console.log("checkbox id: "+id)
        todo= todo.map(element=>
            {
                 if(element.id == id)
                 {
                    element.completed =! element.completed
                 }
                 return element
                }
        )
        console.log(todo)

        updateFrontend()

    }



    function editTodo(id)
{
    console.log("editTodo")
    editingFlag = id
    updateFrontend()
}


function updateTodo()
{
    console.log("---call updateTodo Function--------")
    todo.map(element=>
        {
            if(element.id == editingFlag)
            {
                element.text = document.getElementById("editTodo").value
                return element
            }
            else
                return element
        })
    console.log(todo)
    editingFlag = -1
    updateFrontend()
}



     function updateFrontend()
    {
        
        let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""

    todo.forEach(element=>
        {
            if (element.completed)
            {
                todoList.innerHTML += "<li>"+
                "<input type=\"checkbox\" true onclick=\"checkboxListener("+element.id+")\"></input>"+
                "<s>"+element.text+"</s>"+
                "<button onclick=\"deleteTodo("+element.id+")\">Delete</button>"+
                "</li>"
            }

            else
            {
                if(editingFlag == element.id)  //Editing
                {
                    todoList.innerHTML +="<li>"+
                    "<input type=\"checkbox\" onclick=\"------=("+element.id+")\"></input>"+
                    "<input type=\"text\" id=\"editTodo\" placeholder=\"Edit your todo\" value=\""+element.text+"\"/>"+
                    "  <button onclick=\"deleteTodo("+element.id+")\">Delete</button>"+
                    "  <button onclick=\"updateTodo()\">Save Todo</button>"+
                "</li>"
            
                }
                else//Not editing
                {
                    todoList.innerHTML += 
                    "<li>"+
                        "<input type=\"checkbox\"  onclick=\"checkboxListener("+element.id+")\"></input>"+
                        element.text+
                        "  <button onclick=\"deleteTodo("+element.id+")\">Delete</button>"+
                        "<button onclick=\"editTodo("+element.id+")\">Edit</button>"+
                    "</li>"
                }
            }
        }) 

     }

   