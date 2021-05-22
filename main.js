// header

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItem = $('.header_item-link.active');
const line = $('.line');
line.style.left = tabItem.offsetLeft + 'px';
line.style.width = tabItem.offsetWidth + 'px';
const tabs = $$('.header_item-link');
tabs.forEach((tab)=>{
    tab.onclick = function(){
        $('.header_item-link.active').classList.remove('active');
        this.classList.add('active');
        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
    }
})



//change Image
var index = 1;
  var changeImages = function(){
    var imgs =["./assets/img/hoalan6.jpg", "./assets/img/hoalan7.jpg", "./assets/img/hoalan8.jpg", "./assets/img/hoalan5.gif","./assets/img/hoalan1.jpg","./assets/img/hoalan2.jpg","./assets/img/hoalan3.jpg","./assets/img/hoalan4.jpg","./assets/img/hoalan10.jpg"];
    document.getElementById('slider_img').src = imgs[index];
    index++;
    if(index==9){
        index = 0;
    }
}
setInterval(changeImages, 4000);

// đẩy product ra html
var productApi = 'http://localhost:3000/product';
function start(){
    getProduct(function(product){
        renderProduct(product);
    })
}




start();
function getProduct(callback) {
    fetch(productApi)
        .then(function(responsive){
            return responsive.json();
        })
        .then(callback)
}
// onclick="productDetail(${product.id})
function renderProduct(products){
    var listProducts = document.querySelector('.row');
    var html = products.map(function(product){
        return `
            <div class="col l-2-4">  
                <a href="product_detail.html?id=${product.id}" " class = 'product_item'>     
                    <img class= "product_item-img" src = '${product.img}' width ='100%' height = '200px'></img>
                    <h4 class = 'product_item-name'>${product.name}</h4>
                    <h4 class='product_item-price'>${product.price}</h4>

                </a>
            </div>
        `
    })
   
    listProducts.innerHTML = html.join('');

}
function productDetail(idProduct,img,name,price){
    alert(idProduct)
}






