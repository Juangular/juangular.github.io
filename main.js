const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile");

menu.addEventListener('click',toggleMenuNav);

function toggleMenuNav(){
    mobile.classList.toggle('inactive');
}