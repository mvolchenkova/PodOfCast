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