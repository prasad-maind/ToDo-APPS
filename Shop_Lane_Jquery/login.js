

//var login_form = document.getElementById("login_form")
var login_form = $("#login_form")

login_form.submit(function(e){
e.preventDefault()
email_id = e.target.email_id.value
password_1 = e.target.password.value

$.ajax({
    type:"get",
    url:"https://5ef88b09ae8ccb0016fd725b.mockapi.io/CartDataForShopeLAne",
    success:function(responseArr){
        for(var i=0;i<responseArr.length;i++){
            if(responseArr[i].EmailId == email_id ){
                var test = true
                if(responseArr[i].password == password_1){
                    var test1 = true
                    console.log("login sucessful")
                    localStorage.setItem("Login_id",responseArr[i].EmailId)
                    localStorage.setItem("user_name",responseArr[i].username)
                    localStorage.setItem("id",responseArr[i].id)
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
})
})