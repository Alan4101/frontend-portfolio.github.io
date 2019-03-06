console.log('index');


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

const desktop_btn = document.querySelectorAll('.desktop-i');
const tablet_btn = document.querySelectorAll('.tablet-i');
const phone_btn = document.querySelectorAll('.phone-i');
const d_b = document.querySelectorAll('.desktop');
const p = document.querySelector('#portfolio');

d_b.forEach((el, i)=>{el.setAttribute('data-number',i)});

function setDataNumber(el, el1, el2) {
    el.forEach((el, i)=> el.setAttribute('data-number',i+'d'));
    el1.forEach((el, i)=> el.setAttribute('data-number',i+'t'));
    el2.forEach((el, i)=> el.setAttribute('data-number',i+'p'));
}
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

// Params
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