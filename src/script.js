
let slides = document.querySelectorAll('.home .slide-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const closer = document.querySelector('.closer');
closer.onclick = () => {
    closer.style.display = 'none';
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

const cart = document.querySelector('.cart');
const openCart = document.querySelector('#openCart');
openCart.onclick = () => {
    closer.style.display = 'block';
    cart.classList.toggle('active');
}


const loginForm = document.querySelector('.login-form');
const login = document.querySelector('#openLogin');
login.onclick = () => {
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}