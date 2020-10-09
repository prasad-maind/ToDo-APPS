//------------------------declaring dom ides

var Logout_button = $("#Logout_button")
var btnAddTodo = $("#button_add_todo")
var todoInput = $("#Input_to_do_list")
var paraDiv = $("#to_do_list_div")

$.ajax({
    type:"get",
    url:"https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",
    success: handelresonse,
    error: function(request){
        console.log(request.status)
       
    }
})




function handelresonse(responseArrr){
    //--------------------Logout_name-----------------------
    var logout_btn =  $("#Logout_button").text("Logout : " + localStorage.getItem("user_name"))
    //--------------------label_name-----------------------
    var label1 = $("#label").text(localStorage.getItem("user_name")+"'s"+" :To Do List")
   for(i=0;i<responseArrr.length;i++){
       if(responseArrr[i].emailid == localStorage.getItem("Login_id")){
           var paraDiv = $("#to_do_list_div")
           var todoInfo = $("<p>").text(responseArrr[i].todos)
           paraDiv.append(todoInfo)
           todoInfo.attr("class","todo")
           todoInfo.attr("id",responseArrr[i].uniqID)

           var delete_button = $("<button>")
           delete_button.attr({"id":"delete_button","onclick":"onclickdeletebtn(this)"})
           todoInfo.append(delete_button)

           var deleteBtn = $("<i>").attr({
               "class":"far fa-trash-alt"
           })
           delete_button.append(deleteBtn)
           
       }
   
   }
}


//----------------------fuction for creating a todo item----------------------
function createTodoCard(id,enteredText){
    var paraDiv = $("#to_do_list_div")
    var todoInfo = $("<p>").text(enteredText)
    paraDiv.append(todoInfo)
    todoInfo.attr("class","todo")
    todoInfo.attr("id",id)
    var todoOBJ = {
        emailid:localStorage.getItem("Login_id"),
        uniqID: id,
        todos: enteredText
    };
    var delete_button = $("<button>")
    delete_button.attr({"id":"delete_button","onclick":"onclickdeletebtn(this)"})
    todoInfo.append(delete_button)

    var deleteBtn = $("<i>").attr({
        "class":"far fa-trash-alt"
    })
    delete_button.append(deleteBtn)
    //-------------------------putting data fo api api ----------------------------
    post_action(todoOBJ)

}

//--------action to store data into api----------------------------------------------
function post_action(obj){
$.ajax({
    type:"post",
    url:"https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",
    data:obj
})
}

//-----------ClickListener--------------------------------------------------------
btnAddTodo.click(function(){
    if(todoInput.val() !== null && todoInput.val() !== ""){
            createTodoCard("todo"+new Date().getTime(),todoInput.val())
            var value = ""
            todoInput.val(value)
        }
        else{
            alert("Please Enter the valud todo")
        }
 })


 //--------------keyListner -------------------------------------------------------
todoInput.keyup(function(e){
    if(e.which === 13){
        if(todoInput.val() !== null && todoInput.val() !== ""){
            createTodoCard("todo"+new Date().getTime(),todoInput.val())
            var value = ""
            todoInput.val(value)
        }
        else{
            alert("Please Enter the valud todo")
        }
    } 
    })


//--------------------Logout_button-----------------------
Logout_button.click(function(){
    localStorage.setItem("Login_id","")
    window.location.href = "./login.html"
    })
    

//------------------------deletefuction-----------------------------
function onclickdeletebtn(elem){
    var parent = elem.parentNode;
    parent = parent.id
    //var currentCaard = document.getElementById(parent)
    var currentCaard = $("#"+parent)
    $.ajax({
        type:"get",
        url:"https://5ef88b09ae8ccb0016fd725b.mockapi.io/data_to_do",
        success: function(responseArrr){
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
        },
        error: function(request,parent,currentCaard){
        console.log(request.status)
    }
    })
}

