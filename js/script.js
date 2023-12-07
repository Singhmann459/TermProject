let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    LogIN.classList.remove('active');
    Navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    LogIN.classList.remove('active');
    Navbar.classList.remove('active');
}

let LogIN = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    LogIN.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    Navbar.classList.remove('active');
}


let Navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    Navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LogIN.classList.remove('active');
    
}


window.onscroll=()  =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LogIN.classList.remove('active');
    Navbar.classList.remove('active');
}