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
        }else {
            block.classList.remove('after');

        }

        },100);
};
textShow();