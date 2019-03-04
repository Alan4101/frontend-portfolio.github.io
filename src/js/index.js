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
const d_t = document.querySelectorAll('.tablet');
const d_p = document.querySelectorAll('.phone');

const p = document.querySelector('#portfolio');


function setDataNumber(el, el1, el2) {
    el.forEach((el, i)=> el.setAttribute('data-number',i+'d'));
    el1.forEach((el, i)=> el.setAttribute('data-number',i+'t'));
    el2.forEach((el, i)=> el.setAttribute('data-number',i+'p'));
}

p.addEventListener('click', (e)=>{
    var o = e.target.getAttribute('data-number');
    console.log("ok="+o);
    for(let i = 0; i<d_b.length; i++){
        if(o === d_b[i].getAttribute('data-number')){
            d_b[i].classList.toggle('actv');
            console.log(d_b[i].getAttribute('data-number'));
        }else if(o === d_t[i].getAttribute('data-number')){
            console.log(d_t[i].getAttribute('data-number'));
        }else if(o ===d_p[i].getAttribute('data-number') ){
            console.log(d_p[i].getAttribute('data-number'));
        }
    }
    // console.log(o);
});

setDataNumber(d_b, d_t, d_p);
setDataNumber(desktop_btn, tablet_btn, phone_btn);
textShow();
