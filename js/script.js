let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
}

let LogIN = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    LogIN.classList.toggle('active');
}


let Navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    Navbar.classList.toggle('active');
}