var login_form = document.getElementById("login_form")
login_form.addEventListener("submit",function(e){
e.preventDefault()

email_id = e.target.email_id.value
password_1 = e.target.password.value

var xhttp = new XMLHttpRequest()
xhttp.open("get","https://5ef88b09ae8ccb0016fd725b.mockapi.io/todo_signup_version",true)
xhttp.send()
xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4 ){
        var responseArr = JSON.parse(xhttp.responseText)
        for(var i=0;i<responseArr.length;i++){
            if(responseArr[i].emailid == email_id ){
                var test = true
                if(responseArr[i].password == password_1){
                    var test1 = true
                    console.log("login sucessful")
                    localStorage.setItem("Login_id",responseArr[i].emailid)
                    localStorage.setItem("user_name",responseArr[i].username)
                    window.location.href = "./index.html"
                }
                if(test1!=true){
                    console.log("password wrong")
                    alert("Password Wrong")

                }
            }
        }
        if(test!=true){
            console.log("user_not_register")
            alert("User Not Regestier")
            
        }  
    }
}

})