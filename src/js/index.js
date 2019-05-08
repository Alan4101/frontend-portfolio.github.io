import { Message} from "./message";

const desktop_btn = document.querySelectorAll('.desktop-i');
const tablet_btn = document.querySelectorAll('.tablet-i');
const phone_btn = document.querySelectorAll('.phone-i');
const d_b = document.querySelectorAll('.desktop');
const p = document.querySelector('#portfolio');
const listItems = document.querySelector(".content-portfolio");
const workLists = document.querySelector('.work-content');
const textLists = document.querySelector('.text-animated');
const btnDown = document.querySelector('#btnDown');
const btnUp = document.querySelector('#btnUp');
const navBtn = document.querySelector('#navBtn');
const navList = document.querySelectorAll('.wrapp-nav ul li');
//text "hi i`m andrew"

let textShow = ()=>{
    let str = String();
    let block = document.querySelector('.text-show');

    str = block.textContent;
    block.innerHTML = '';
    let i = 0;
    setInterval(()=>{
        if(i<str.length){
            block.textContent = block.textContent + str[i];
            i++;
        }else { block.classList.remove('after'); }
    },100);
};
//data - attr for desktop item in portfolio section
d_b.forEach((el, i)=>{el.setAttribute('data-number',i)});
//data -attr for select button like: desktop, tablet, phone
function setDataNumber(el, el1, el2) {
    el.forEach((el, i)=> el.setAttribute('data-number',i+'d'));
    el1.forEach((el, i)=> el.setAttribute('data-number',i+'t'));
    el2.forEach((el, i)=> el.setAttribute('data-number',i+'p'));
}
//functions for select view in portfolio item
function desktop(el) {
    var t = parseInt(el);
    d_b.forEach( w =>{
        if(t == w.getAttribute('data-number')) {
            w.children[1].style.display = 'block';
            w.children[2].style.display = 'block';
            w.children[0].children[0].style.transform = 'rotate(0deg)';
            w.children[0].style.transform = 'rotate(0deg)';
            w.children[0].classList.remove('phone');
            w.children[0].classList.remove('tablet');
        }
    });
}

function tablet(el) {
    var t = parseInt(el);
    d_b.forEach( w =>{
        if(t == w.getAttribute('data-number')) {
            w.children[1].style.display = 'none';
            w.children[2].style.display = 'none';
            w.children[0].style.transform = 'rotate(90deg)';
            w.children[0].children[0].style.transform = 'rotate(-90deg)';
            w.children[0].classList.remove('phone');
            w.children[0].classList.add('tablet');

        }
    });
}

function phone(el) {
    var t = parseInt(el);
    d_b.forEach( w =>{
        if(t == w.getAttribute('data-number')) {
            w.children[1].style.display = 'none';
            w.children[2].style.display = 'none';
            w.children[0].classList.add('phone');

            if(w.children[0].classList.contains('tablet')){
                w.children[0].style.transform = 'rotate(0deg)';
                w.children[0].children[0].style.transform = 'rotate(0deg)';
            }else {
                w.children[0].classList.remove('tablet');
            }
            w.children[0].classList.remove('tablet');


        }
    });
}

p.addEventListener('click', (e)=>{
    var o = e.target.getAttribute('data-number');

    switch (o.replace(/\d/g, '')) {
        case 'd': desktop(o); break;
        case 't': tablet(o); break;
        case 'p': phone(o); break;
    }
});

setDataNumber(desktop_btn, tablet_btn, phone_btn);

textShow();
//swipe slider
let swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let isScrolling = false;
let flag = true;
//scroll animations
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling() {
    for (let i = 0; i<2; i++) {
        let textL = textLists.children[i];
        if(i&1){
            isPartiallyVisible(textL)?textL.classList.add('slideInLeft'):textL.classList.remove('slideInLeft');
        }else {
            isPartiallyVisible(textL)? textL.classList.add('slideInRight'): textL.classList.remove('slideInRight');
        }
    }
    for (let i = 0; i < 4; i++) {
        let listItem = listItems.children[i];
        let workItem = workLists.children[i];

        if (isPartiallyVisible(listItem) || isPartiallyVisible(workItem)) {
            listItem.classList.add("slideInLeft");
            workItem.classList.add("slideInRight");

        } else {
            listItem.classList.remove("slideInLeft");
            workItem.classList.remove("slideInRight");
        }
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}
// scroll at one window
function scrollDown() {
    let  windowCoords = document.documentElement.clientHeight;
    (function scroll() {
        if (window.pageYOffset < windowCoords) {
            window.scrollBy(0, 10);
            setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
            window.scrollTo(0, windowCoords);
        }
    })();
}
//button scroll up
function scrollUp() {
    (function scroll () {
        if(window.pageYOffset > 0){
            window.scrollBy(0, -10);
            setTimeout(scroll, 0);
        }
    })();
}

let showBtnUp = ()=>{
    const wCord = document.documentElement.clientHeight;
    return window.pageYOffset>wCord ? btnUp.classList.add('show') : btnUp.classList.remove('show');
};

document.getElementById('send_message').addEventListener('click', validate);

function validate() {
    let d = document;
    let form =  d.forms.contact;
    // console.log(form.name.value);
    if(form.name.value == '' && form.email.value == '' && form.phone.value =='' && form.text.value ==''){
            Message("Error","The filds empty", true);
    }else if(form.name.value == '' || form.email.value == '' || form.phone.value =='' || form.text.value ==''){
        Message('Error', `The field is empty!`, true);
    }else if(form.text.value.length < 15){
        Message('Problem!', 'The field message must have minimum 15 symbol', true);
    }else {
        Message('Success!', 'Message send');
        reset(form);
    }
}
function reset(form) {
    form.reset();
}

document.querySelector('#forPhone').onkeypress = function (e) {
    e = e || window.event;
    if(e.charCode && (e.charCode < 48 || e.charCode > 57)){
        return false;
    }
};

window.addEventListener('scroll', showBtnUp);

btnUp.addEventListener('click', scrollUp);

btnDown.addEventListener('click', scrollDown);
//header nav

function navListAnimation(f) {
    if(f){
        navList.forEach( el =>{
            el.classList.toggle('active__nav');
            el.classList.remove('hide__nav');
            document.querySelector('.body').classList.add('dark__body');
        });
    }else {
        navList.forEach( el =>{
            el.classList.toggle('active__nav');
            el.classList.add('hide__nav');
            document.querySelector('.body').classList.remove('dark__body');


        });
    }

}

navBtn.addEventListener('click',()=>{
    // let t = navList[0].parentNode;

    if(flag){
        // setTimeout(()=> t.style.opacity = '1' ,800);
        // t.style.opacity = '1';
        navListAnimation(flag);
        flag = false;
   }else {
        navListAnimation(flag);
        // setTimeout(()=> t.style.opacity = '0' ,700);
        flag = true;

    }
    navBtn.classList.add('animationbtn');
    setTimeout(()=> navBtn.classList.remove('animationbtn'),2000);
});

