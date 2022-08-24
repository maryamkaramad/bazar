const burgerMenu__toggle = document.querySelector(".burgerMenu__toggle");
const burgerMenu = document.querySelector(".burgerMenu");
const burgericon = `<svg
width="24"
height="24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
class=""
>
<path
  d="M3.643 6.273h16.714A.631.631 0 0021 5.636.631.631 0 0020.357 5H3.643A.631.631 0 003 5.636c0 .358.281.637.643.637zm16.714 5.09H3.643A.631.631 0 003 12c0 .358.281.636.643.636h16.714A.631.631 0 0021 12a.631.631 0 00-.643-.636zm0 6.364H3.643a.631.631 0 00-.643.637c0 .358.281.636.643.636h16.714a.631.631 0 00.643-.636.631.631 0 00-.643-.637z"
  fill="#20222A"
></path>
</svg>`;
const closeicon = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M18.78 5.22a.728.728 0 010 1.043L13.043 12l5.737 5.737a.728.728 0 010 1.043.728.728 0 01-1.043 0L12 13.043 6.263 18.78a.728.728 0 01-1.043 0 .728.728 0 010-1.043L10.957 12 5.22 6.263a.728.728 0 010-1.043.728.728 0 011.043 0L12 10.957l5.737-5.737a.728.728 0 011.043 0z" fill="#20222A"></path></svg>`;
burgerMenu__toggle?.addEventListener("click", function (e) {
  burgerMenu.classList.toggle("d-none");
  if (burgerMenu.classList.contains("d-none")) {
    burgerMenu__toggle.innerHTML = burgericon;
  } else {
    burgerMenu__toggle.innerHTML = closeicon;
  }
});
