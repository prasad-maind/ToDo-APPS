// var xhttp = new XMLHttpRequest();
// xhttp.open("GET","",true)
// xhttp.send()
// xhttp.onreadystatechange = function(){
//     if(xhttp.readyState === 4){
//     var responseArr= JSON.parse(xhttp.responseText)
//     }
//     }\
// <div id="video_card">
//                 <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="">
//                 <header>video1</header>
//</div>

var xhttp = new XMLHttpRequest();
xhttp.open("Get","https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",true)
xhttp.send()
xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4){
        var responseArrr = JSON.parse(xhttp.responseText)
        createVideoCard(responseArrr)
    }

}


function createVideoCard (responseArrr){
    for(var i=0;i<responseArrr.length;i++){
        var main_card_div = document.getElementById("Main_video_card_div")
        var cardDiv = document.createElement("div")
        var anchor_img = document.createElement("a")
        var imgDiv = document.createElement("img")
        cardDiv.id = "video_card"
        anchor_img.href= "videoplay.html?vId="+responseArrr[i].id
        anchor_img.appendChild(imgDiv)
        imgDiv.src = responseArrr[i].thumbnail
        var headerDiv = document.createElement("header")
        headerDiv.innerText = responseArrr[i].title
        cardDiv.appendChild(anchor_img)
        cardDiv.appendChild(headerDiv)
        main_card_div.appendChild(cardDiv)
    }
}






