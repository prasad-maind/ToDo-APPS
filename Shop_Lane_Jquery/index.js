
// <div class="product_grid">
//                 <a href="">
//                     <img class="product_img" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
                
//                 </a>
//                 <div class="product-meta">
//                     <h4>Men Navy Blue Solid Sweatshirt</h4>
//                     <h5>United Colors of Benetton</h5>
//                     <p>Rs 2599</p>
//                 </div>
//             </div>

$.ajax({
    type:"get",
    url:"https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    success:handelresonse,
    error:function(request){
        console.log(request.status)
    }
})

function handelresonse(responseArrr){
    var clothing_grid_div = $("#clothing_grid")
    var accessories_grid_div = $("#accessories_grid")
    const isCloting = responseArrr.filter(responseArrr => responseArrr.isAccessory == false)
    const  isAccessory = responseArrr.filter(responseArrr => responseArrr.isAccessory == true)
    craeteProductgrid(isCloting,clothing_grid_div)
    craeteProductgrid(isAccessory,accessories_grid_div)

}


function craeteProductgrid(array,grid){

    for(i=0;i<array.length;i++){
        var product_grid_div = $("<div>").attr("class","product_grid")
        var ancorTag = $("<a>").attr("href","details.html?productid="+array[i].id).append($("<img>").attr({"class":"product_img","src":array[i].preview}))
        product_grid_div.append(ancorTag)
        var product_met_div = $("<div>").attr("class","product-meta")
        var h4_tag = $("<h4>").text(array[i].name)
        var h5_tag = $("<h5>").text(array[i].brand)
        var p_tag = $("<p>").text("RS "+array[i].price)
        product_met_div.append(h4_tag,h5_tag,p_tag)
        product_grid_div.append(product_met_div)
        grid.append(product_grid_div)
        console.log(array[i].price)
    }

}