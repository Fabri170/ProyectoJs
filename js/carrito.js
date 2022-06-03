/*const addToShoppingCartButtons = document.querySelectorAll('vuelo');
addToVueloButtons.forEach(addToVueloButtons => {
    addToVueloButtons.addEventListener('click', addToVueloClicked);
});
   console.log(' :addToVueloClicked -> titulo ', titulo);
function addToVueloClicked(event) {
    const button = event.target
}*/

const addToShoppingButtons = document.querySelectorAll('.vuelo')
addToShoppingButtons.forEach(addToShoppingButtons => {
    addToShoppingButtons.addEventListener('click', addVueloClicked);
});
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addVueloClicked(event) {
    const button = event.target;

    const caja = button.closest('.caja');


    const titulo = item.querySelector('.titulo').textContent;


    const precio = item.querySelector('.precio').textContent;

    const logos = item.querySelector('.logos').src;


    addItemToShoppingCart(titulo, precio, logos);


}

function addItemToShoppingCart(titulo, precio, logos) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = <
        div class = "shoppingCartItemsContainer col-md-9" >
        <
        div class = "row g-2" >
        <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-success" > -25 % OFF < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-avianca.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > XRD Active Shoes < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-warning" > SALE < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-avianca.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Hygen Smart watch < /h5> <span class="precio">U$1000</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-avianca.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Acer surface book 2.5 < /h5> <span class="precio">U$1200</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-suitcase"
    aria - hidden = "true"
    style = "background: black;" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-success" > -10 % OFF < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-klm.png.crdownload"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Dell XPS Surface < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <!-- <span class="off bg-success">-25% OFF</span> -->
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-klm.png.crdownload"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Acer surface book 5.5 < /h5> <span class="precio">U$1150</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-success" > -5 % OFF < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-klm.png.crdownload"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Xps smart watch 5.0 < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-warning" > SALE < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-copa.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Acer surface book 8.5 < /h5> <span class="precio">U$1350</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-copa.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Tyko Running shoes < /h5> <span class="precio">U$1050</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-copa.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Dell surface book 5 < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-warning" > SALE < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-iberia.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Acer surface book 8.5 < /h5> <span class="precio">U$1200</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-iberia.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Tyko Running shoes < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-iberia.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Dell surface book 5 < /h5> <span class="precio">U$1400</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" > < span class = "off bg-warning" > SALE < /span> <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-american.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Acer surface book 8.5 < /h5> <span class="precio">U$900</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-american.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Tyko Running shoes < /h5> <span class="precio">U$1000</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        div class = "caja col-md-4" >
        <
        div class = "product py-4" >
        <
        div class = "text-center" > < img class = "logos"
    src = "/imagenes/logo-american.png"
    width = "200" > < /div> <
        div class = "about text-center" >
        <
        h5 class = "titulo" > Dell surface book 5 < /h5> <span class="precio">U$1300</span >
        <
        /div> <
        div class = "cart-button mt-3 px-2 d-flex justify-content-between align-items-center" > < button class = "vuelo btn-primary text-uppercase"
    id = "vuelo" > Comprar Vuelo < /button> <
        div class = "add" > < span class = "product_fav" > < i class = "fa fa-heart-o" > < /i></span > < span class = "product_fav" > < i class = "fa fa-opencart" > < /i></span > < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>


}