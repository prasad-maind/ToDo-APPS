var prductId = window.location.search.split("=")[1]

$.ajax({
    type:"get",
    url : "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+prductId,
    success:getdetails,
    error:function(request){
        console.log(request.status)
    }
})



function getdetails(responsarr){
    var product_preview_div = $("#product-preview").attr("src",responsarr.preview)
    var product_tital_div = $("#product_tital").text(responsarr.name)
    var product_brand_div = $("#product_brand").text(responsarr.brand)
    var product_brand_div = $("#product-price").text(responsarr.price)
    var description_div = $("#description").text(responsarr.description)
    
    var photos  = responsarr.photos
    var product_images_div = $("#product-images")
    for(i=0;i<photos.length;i++){
        var imges = $("<img>").attr("src",photos[i])
        product_images_div.append(imges)
    }

    $("img").click(function(){
        $('.active-img').removeClass('active-img');
        $(this).addClass("active-img");
        $("#product-preview").attr("src",this.src)
    })
  
}


var id = localStorage.getItem("id")
function addToCartBtnClicked(element){
    

    $.ajax({
        type:"get",
        url : "https://5ef88b09ae8ccb0016fd725b.mockapi.io/CartDataForShopeLAne/"+id,
        success:function(responsarr){
            var cart= responsarr.Cart
            postaction(cart,id)
        },
        error:function(request){
            console.log(request.status)
        }
        }
    )


}
function postaction(cart,id){

    var cart = cart.push(Number(prductId))
    var test = JSON.stringify(cart)
    var settings = {
        "url": "https://5ef88b09ae8ccb0016fd725b.mockapi.io/CartDataForShopeLAne/"+id,
        "method": "PUT",
        "data": {"Cart":test},
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    

}
