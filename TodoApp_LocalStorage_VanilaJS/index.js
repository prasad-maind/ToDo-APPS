
//-------------------------adding a local storage array--------------------------
init_local_storage()


//--------------------------------finding dom items--------------------------------
var btnAddTodo = document.getElementById("button_add_todo")
var todoInput = document.getElementById("Input_to_do_list")
var paraDiv = document.getElementById("to_do_list_div")


//------------------------geting_items_from_APi-------------------------------------
//     var xhttp = new XMLHttpRequest()
//     xhttp.open("get","https://5ef88b09ae8ccb0016fd725b.mockapi.io/todos",true)
//     xhttp.send()
//     xhttp.onreadystatechange = function(){
//         if(xhttp.readyState === 4){
//             var responseArrr = JSON.parse(xhttp.responseText)
//             for(i=0;i<responseArrr.length;i++){
//                 var paraDiv = document.getElementById("to_do_list_div")
//                 var todoInfo = document.createElement("p")
//                 var todoText = document.createTextNode(responseArrr[i].todos)
//                 todoInfo.appendChild(todoText)
//                 paraDiv.appendChild(todoInfo)
//                 todoInfo.classList.add("todo")
//                 todoInfo.id = (responseArrr[i].uniqID)
               
//                     var deleteBtn = document.createElement("i")
//                     deleteBtn.classList.add("far", "fa-trash-alt")
//                     todoInfo.appendChild(deleteBtn)
            
//             }
//         }

//     }


//----------------------fuction for creating a todo item----------------------
function createTodoCard(id,enteredText){
    //---------Adding todo info
    var paraDiv = document.getElementById("to_do_list_div")
    var todoInfo = document.createElement("p")
    var todoText = document.createTextNode(enteredText)
    todoInfo.appendChild(todoText)
    paraDiv.appendChild(todoInfo)
    todoInfo.classList.add("todo")
    todoInfo.id =id
    var todoOBJ = {
        uniqID: todoInfo.id,
        todos: enteredText
    };
    var deleteBtn = document.createElement("i")
    deleteBtn.classList.add("far", "fa-trash-alt")
    todoInfo.appendChild(deleteBtn)


    //-------------------------geting data from api ----------------------------
    // post_action(todoOBJ)
   


    //------------------------------Local__Storage -----------------------------
    var stored_Local_list = JSON.parse(localStorage.getItem("to_d0_list"))
    stored_Local_list.push(todoOBJ)
    localStorage.setItem("to_d0_list",JSON.stringify(stored_Local_list))



     //--------Delete Button--------------------------------------------------
    deleteBtn.addEventListener("click",function(){
    var currentCaard = document.getElementById(todoInfo.id)
    var storedlist =    JSON.parse(localStorage.getItem("to_d0_list"))
    var removeAtPos = -1
    for(var i=0;i<storedlist.length;i++){
        if(storedlist[i].uniqID === todoInfo.id){
            removeAtPos = i
            break
        }
    }
    storedlist.splice(removeAtPos,1)
    localStorage.setItem("to_d0_list",JSON.stringify(storedlist))
    currentCaard.remove()
})  

    
}

    //-----------ClickListener--------------------------------------------------------
    btnAddTodo.addEventListener("click",function(){
    if(todoInput.value !== null && todoInput.value !== ""){
        createTodoCard("todo"+new Date().getTime(),todoInput.value)
        todoInput.value = ""
    }
    else{
    alert("Please Enter the valud todo")
    }
    })

    //--------------keyListner -------------------------------------------------------
    todoInput.addEventListener("keyup",function(e){
    if(e.which === 13){
        if(todoInput.value !== null && todoInput.value !== ""){
            createTodoCard("todo"+new Date().getTime(),todoInput.value)
            todoInput.value = ""
        }
        else{
            alert("Please Enter the valud todo")
        }
    } 
    })

// function post_action(obj){
//     var xhttp = new XMLHttpRequest()
//     xhttp.open("post","https://5ef88b09ae8ccb0016fd725b.mockapi.io/todos",true)
//     xhttp.setRequestHeader("Content-Type","application/json;charset=UFT-8")
//     xhttp.send(JSON.stringify(obj))
//     xhttp.onreadystatechange = function(){
//         if(xhttp.readyState === 4){
//             var responseArrr = JSON.parse(xhttp.responseText) 
//     }
// }
//}




///---------------------geting card from local storage to to list----------------


function init_local_storage(){
    var local_array_of_todo_list = localStorage.getItem("to_d0_list") 
    if(local_array_of_todo_list === null){
        localStorage.setItem("to_d0_list",JSON.stringify([]))
    } 
    else{
        local_array_of_todo_list = JSON.parse(local_array_of_todo_list)
        for(var i=0;i<local_array_of_todo_list.length;i++){
            var id = local_array_of_todo_list[i].uniqID
            var todos = local_array_of_todo_list[i].todos
            
            var paraDiv = document.getElementById("to_do_list_div")
            var todoInfo = document.createElement("p")
            var todoText = document.createTextNode(todos)
            todoInfo.appendChild(todoText)
            paraDiv.appendChild(todoInfo)
            todoInfo.classList.add("todo")
            todoInfo.id =id

            var deleteBtn = document.createElement("i")
            deleteBtn.classList.add("far", "fa-trash-alt")
            todoInfo.appendChild(deleteBtn)
           
            deleteBtn.addEventListener("click",function(){
                var currentCaard = document.getElementById(todoInfo.id)
                var storedlist =    JSON.parse(localStorage.getItem("to_d0_list"))
                var removeAtPos = -1
                for(var i=0;i<storedlist.length;i++){
                    if(storedlist[i].uniqID === todoInfo.id){
                        removeAtPos = i
                        break
                    }
                }
                storedlist.splice(removeAtPos,1)
                localStorage.setItem("to_d0_list",JSON.stringify(storedlist))
                currentCaard.remove()
            })  
        }

    }
    
}