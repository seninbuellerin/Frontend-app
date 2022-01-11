window.onscroll = function showHeader() {

    const header = document.querySelector('.header');

    if(window.pageYOffset > 0) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};

function more () {
    const elements = document.querySelectorAll('.tours-item');
    const btn = document.querySelector('.button_more');
    if (elements[5].style.display === '' || elements[5].style.display === 'none') {
        for (let i = 2; i<=5; i++) {
            elements[i].style.display ='inline';
        };
        btn.innerHTML = 'Скрыть';
    } else {
        for (let i = 2; i<=5; i++) {
            elements[i].style.display ='none';
        };
        btn.innerHTML = 'Больше туров';
    };
};

(function TransformBurger() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.burger_menu');
    const body = document.querySelector('body');
    const burgerTop = document.getElementById('burger_id');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
        if (burgerTop.style.top == '800px'){
            burgerTop.style.top = '0px';
        } else {
            burgerTop.style.top = '800px';
        }
    });
}());

const anchors = document.querySelectorAll('a.link-to')

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



