const hamburger = document.querySelector('#nav-content .nav-icon .open');
const menu = document.querySelector('#nav-content .container')


hamburger.addEventListener('click', ()=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
    }
    else{
        menu.classList.add('show');
    }
})