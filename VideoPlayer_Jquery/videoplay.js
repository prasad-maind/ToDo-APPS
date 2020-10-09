var videoid = window.location.search.split("=")[1]
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/video/"+videoid,true)
xhttp.send()
xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4){
        var responseArrr = JSON.parse(xhttp.responseText)
        videoPlayer_html(responseArrr)
        console.log(responseArrr)
        }

    }

function videoPlayer_html(responseArrr){

//--------------------Iframe-------------------------


    var main_div =  document.getElementById("main")
    var video_card_div_iframe = document.createElement("iframe")
    video_card_div_iframe.id = "video_card_div"
    video_card_div_iframe.src="https://player.vimeo.com/video/"+responseArrr.vimeoId
    main_div.appendChild(video_card_div_iframe)



    //--------------------Views-------------------------
    var Live_share_count_div  = document.getElementById("sub_Live_share_count")
    var views_div = document.createElement("div")
    views_div.id = "views"
    views_div.innerText =responseArrr.views + " views"
    Live_share_count_div.appendChild(views_div)


    
    //--------------------Discription-------------------------
    var description_div_Div = document.getElementById("description_div")
    var h_div = document.createElement("h")
    h_div.innerText = responseArrr.title
    description_div_Div.appendChild(h_div)
    var p_div = document.createElement("p")
    p_div.innerText = responseArrr.description
    description_div_Div.appendChild(p_div)



    var share_1_div = document.createElement("div")
    share_1_div.id = "share_1"

    var a_div1 = document.createElement(a)
    a_div1.href = "#"
    var i_div1 = document.createElement(i)
    i_div1.class = 'far fa-heart'
    a_div1.appendChild(i_div1)
    share_1_div.appendChild(a_div1)


    var a_div2 = document.createElement(a)
    a_div2.href = "#"
    var i_div2 = document.createElement(i)
    i_div2.class = 'far fa-comments'
    a_div2.appendChild(i_div2)
    share_1_div.appendChild(a_div2)

    var a_div3 = document.createElement(a)
    a_div3.href = "#"
    i_div3 = document.createElement(i)
    i_div3.class = 'far fa-bookmark'
    a_div3.appendChild(i_div3)


//--------------------recomandations-------------------------
}
var xhttp1 = new XMLHttpRequest();
xhttp1.open("Get","https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",true)
xhttp1.send()
xhttp1.onreadystatechange = function(){
    if(xhttp1.readyState === 4){
        var responseArrr1 = JSON.parse(xhttp1.responseText)
        createVideoCard(responseArrr1)
    }

}

function createVideoCard (responseArrr1){
    for(var i=0;i<3;i++){
        var main_card_div = document.getElementById("recommndation_div")
        var cardDiv = document.createElement("div")
        var anchor_img = document.createElement("a")
        var imgDiv = document.createElement("img")
        cardDiv.id = "video_card"
        anchor_img.href= "videoplay.html?vId="+responseArrr1[i].id
        anchor_img.appendChild(imgDiv)
        imgDiv.src = responseArrr1[i].thumbnail
        var headerDiv = document.createElement("header")
        headerDiv.innerText = responseArrr1[i].title
        cardDiv.appendChild(anchor_img)
        cardDiv.appendChild(headerDiv)
        main_card_div.appendChild(cardDiv)
    }
}

