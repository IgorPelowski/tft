const button = document.querySelector('.nav__button');
function myClick(){
    const comps = document.querySelector('.nav__comps');
    comps.classList.toggle('nav__comps-menu');
    
}
button.addEventListener("click", myClick);