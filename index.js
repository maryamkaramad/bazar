const burgerMenu__toggle=document.querySelector(".burgerMenu__toggle");
const burgerMenu=document.querySelector(".burgerMenu")
burgerMenu__toggle?.addEventListener('click', function(e){
    burgerMenu.classList.toggle("d-none");
    burgerMenu__toggle.innerHTML=`<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M18.78 5.22a.728.728 0 010 1.043L13.043 12l5.737 5.737a.728.728 0 010 1.043.728.728 0 01-1.043 0L12 13.043 6.263 18.78a.728.728 0 01-1.043 0 .728.728 0 010-1.043L10.957 12 5.22 6.263a.728.728 0 010-1.043.728.728 0 011.043 0L12 10.957l5.737-5.737a.728.728 0 011.043 0z" fill="#20222A"></path></svg>`
});