const burger = document.querySelector('.menuDiv');
const menu1 = document.querySelector('.burger1000');
const back = document.querySelector('.back');
const body = document.querySelector('body');
const menu2 = document.querySelector('.burger768');

if(window.innerWidth < 1001 && window.innerWidth > 768) {
    menu1.style.display = 'none';
    back.style.display = 'none';
}

burger.addEventListener('click', function(){
    if(window.innerWidth < 1001 && window.innerWidth > 768) {
        if(menu1.style.display === 'none') {
            menu1.style.display = 'flex';
            back.style.display = 'flex';
            body.style.overflow = 'hidden';
        } else {
            menu1.style.display = 'none';
            back.style.display = 'none';
            body.style.overflow = 'scroll';
        }
    }
});

if(window.innerWidth < 768) {
    menu2.style.display = 'none';
    back.style.display = 'none';
}

burger.addEventListener('click', function(){
    if(window.innerWidth < 768) {
        if(menu2.style.display === 'none') {
            menu2.style.display = 'flex';
            back.style.display = 'flex';
            body.style.overflow = 'hidden';
        } else {
            menu2.style.display = 'none';
            back.style.display = 'none';
            body.style.overflow = 'scroll';
        }
    }
});
const recent = document.querySelector('.recentButton');
recent.addEventListener('click', function(){
    window.location = '../index/index.html#sixthContainer'
})

let currentSlide = 0;
const slider = document.querySelector('#slider');
const slides = slider.children;
let slideWidth;

// Определение ширины слайда в зависимости от ширины экрана
if (window.innerWidth > 768) {
    slideWidth = 400; // ширина слайда для экранов больше 768px
} else {
    slideWidth = 220; // ширина слайда для экранов меньше 768px
}

const prevButton = document.querySelector('.leftButton');
const nextButton = document.querySelector('.rightButton');

nextButton.addEventListener('click', function(){
    // Переходим к следующему слайду
    currentSlide = currentSlide + 1;
    // Ограничиваем переходы слайдов до последнего слайда
    if(currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }
    // Смещаем слайдер
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevButton.addEventListener('click', function(){
    // Переходим к предыдущему слайду
    currentSlide = currentSlide - 1;
    // Ограничиваем переходы слайдов до первого слайда
    if(currentSlide < 0) {
        currentSlide = 0;
    }
    // Смещаем слайдер
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});