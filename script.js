let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
};

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
};

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
};

// Theme toggle (unchanged from your original code)
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const lightModeIcon = document.getElementById("light-mode-icon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        darkModeIcon.style.display = "none";
        lightModeIcon.style.display = "block";
    }

    const toggleTheme = () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeIcon.style.display = "none";
            lightModeIcon.style.display = "block";
        } else {
            localStorage.setItem("theme", "light");
            darkModeIcon.style.display = "block";
            lightModeIcon.style.display = "none";
        }
    };

    darkModeIcon.addEventListener("click", toggleTheme);
    lightModeIcon.addEventListener("click", toggleTheme);
});


//Improved Carousel Logic
const slides = document.querySelectorAll('.carousel .list .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.dots li');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === n);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentSlide = n;
}

next.addEventListener('click', () => showSlide((currentSlide + 1) % slides.length));
prev.addEventListener('click', () => showSlide((currentSlide - 1 + slides.length) % slides.length));

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

//Autoplay
let autoplayInterval = setInterval(() => {
    next.click();
}, 5000); //Change 5000 to adjust autoplay speed

//Stop autoplay on interaction
carousel.addEventListener('mouseover', () => clearInterval(autoplayInterval));
carousel.addEventListener('mouseout', () => autoplayInterval = setInterval(() => next.click(), 5000));


const boxContainer = document.querySelector('.menu .box-container');
const leftBtn = document.querySelector('.scroll-btn.left-btn');
const rightBtn = document.querySelector('.scroll-btn.right-btn');

leftBtn.addEventListener('click', () => {
    boxContainer.scrollLeft -= 300; 
});

rightBtn.addEventListener('click', () => {
    boxContainer.scrollLeft += 300; 
});

