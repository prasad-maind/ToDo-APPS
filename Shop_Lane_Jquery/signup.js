
//-------------signp  call----
//var signup_form = document.getElementById("sign_up_form")
var signup_form = $("#sign_up_form")
signup_form.submit(function(e){
    e.preventDefault()
    if(e.target.User_password.value !=  e.target.User_confirm_password.value){
        alert("Password not same")
    }else{
    var signup_data={
        username: e.target.User_name.value,
        emailid: e.target.User_email_id.value,
        password: e.target.User_password.value,
        todos:{}
    }

    $.ajax({
        type:"get",
        url:"https://5ef88b09ae8ccb0016fd725b.mockapi.io/todo_signup_version",
        success:function(responseArrr){
            for(i=0;i<responseArrr.length;i++){
                if(responseArrr[i].emailid == e.target.User_email_id.value){
                    var test = true;
                    alert("User already exist!!!!")
                    break;
                }
            }
        if (test!=true){
            var xhttp = new XMLHttpRequest()
            xhttp.open("post","https://5ef88b09ae8ccb0016fd725b.mockapi.io/todo_signup_version",true)
            xhttp.setRequestHeader("Content-Type","application/json;charset=UFT-8")
            xhttp.send(JSON.stringify(signup_data))
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState === 4){
                    console.log(signup_data)
                    this.timeout = 200

                    window.location.href = "./login.html"    
                }
               
        
            }
        } 
        
        }

    })
}
})