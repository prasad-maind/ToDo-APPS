//------------------------declaring dom ides
var Logout_button = document.getElementById("Logout_button")
var btnAddTodo = document.getElementById("button_add_todo")
var todoInput = document.getElementById("Input_to_do_list")
var paraDiv = document.getElementById("to_do_list_div")


//------------------------geting_items_from_APi-------------------------------------
var xhttp = new XMLHttpRequest()
xhttp.open("get","https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",true)
xhttp.send()
xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4){
        var responseArrr = JSON.parse(xhttp.responseText)
         //--------------------Logout_name-----------------------
         var logout_btn = document.getElementById("Logout_button")
         logout_btn.innerText = "Logout : " + localStorage.getItem("user_name")
         //--------------------label_name-----------------------
        var label1 = document.getElementById("label")
        label1.innerText = localStorage.getItem("user_name")+"'s"+" :To Do List"

        for(i=0;i<responseArrr.length;i++){
            if(responseArrr[i].emailid == localStorage.getItem("Login_id")){
               
                var paraDiv = document.getElementById("to_do_list_div")
                var todoInfo = document.createElement("p")
                var todoText = document.createTextNode(responseArrr[i].todos)
                todoInfo.appendChild(todoText)
                paraDiv.appendChild(todoInfo)
                todoInfo.classList.add("todo")
                todoInfo.id = (responseArrr[i].uniqID)
                var delete_button = document.createElement("button")
                delete_button.id = "delete_button"
                delete_button.setAttribute("onclick","onclickdeletebtn(this);")
                todoInfo.appendChild(delete_button)
            
                
                var deleteBtn = document.createElement("i")
                deleteBtn.classList.add("far", "fa-trash-alt")
                delete_button.setAttribute("onclick","onclickdeletebtn(this);")
                delete_button.appendChild(deleteBtn)
                
            }
        
        }
    }

}

//----------------------fuction for creating a todo item----------------------
function createTodoCard(id,enteredText){
    //---------Adding todo info--------------------------------
    var paraDiv = document.getElementById("to_do_list_div")
    var todoInfo = document.createElement("p")
    var todoText = document.createTextNode(enteredText)
    todoInfo.appendChild(todoText)
    paraDiv.appendChild(todoInfo)
    todoInfo.classList.add("todo")
    todoInfo.id =id
    var todoOBJ = {
        emailid:localStorage.getItem("Login_id"),
        uniqID: todoInfo.id,
        todos: enteredText
    };
    var delete_button = document.createElement("button")
    delete_button.id = "delete_button"
    delete_button.setAttribute("onclick","onclickdeletebtn(this);")
    todoInfo.appendChild(delete_button)

    var deleteBtn = document.createElement("i")
    deleteBtn.classList.add("far", "fa-trash-alt")
    delete_button.appendChild(deleteBtn)


    //-------------------------putting data fo api api ----------------------------
    post_action(todoOBJ)
   

    
}



//--------action to store data into api----------------------------------------------
function post_action(obj){
    var xhttp = new XMLHttpRequest()
    xhttp.open("post","https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",true)
    xhttp.setRequestHeader("Content-Type","application/json;charset=UFT-8")
    xhttp.send(JSON.stringify(obj))
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4){
            var responseArrr = JSON.parse(xhttp.responseText) 
    }
}
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


//--------------------Logout_button-----------------------
Logout_button.addEventListener("click",function(){
localStorage.setItem("Login_id","")
window.location.href = "./login.html"
})



//------------------------deletefuction-----------------------------
function onclickdeletebtn(elem){
    var parent = elem.parentNode;
    parent = parent.id
    var currentCaard = document.getElementById(parent)
    var xhttp4 = new XMLHttpRequest()
    xhttp4.open("get","https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",true)
    xhttp4.send()
    xhttp4.onreadystatechange = function(){
        if(xhttp4.readyState === 4){
        var responseArrr = JSON.parse(xhttp4.responseText)
        for(i=0;i<responseArrr.length;i++){
            if(responseArrr[i].uniqID == parent){
                var elementId = responseArrr[i].id
                var xhttp5 = new XMLHttpRequest();
                xhttp5.open("DELETE","https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do/"+elementId,true)
                xhttp5.send()
                xhttp5.onreadystatechange = function(){
                    if(xhttp5.readyState == 4){
                        currentCaard.remove()   
                        
                    }
                }
            }

        }

    }}
}