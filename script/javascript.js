// MENU HAMBURGUER NAVBAR
function initMenuMobile(){
  const btnMobile = document.querySelector(".btn-mobile");
  const headerMenu = document.querySelector(".header-menu");

  function ToggleMenu() {
    const nav = document.querySelector('.nav');
    const headerMenu = document.querySelector('.header-menu');
    nav.classList.toggle('active');
    headerMenu.classList.toggle('active');
  }
  
  btnMobile.addEventListener("click", ToggleMenu);
  headerMenu.addEventListener("click", ToggleMenu);
}
initMenuMobile();
// MENU HAMBURGUER NAVBAR//

// EFEITO MAQUINA DE DIGITAR 
function initTypeWriter(){
  const titulo = document.querySelectorAll('.js-h1-efeito')

  titulo.forEach((titulo)=>{
  function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split(''); // o (split), separa cada letra do testo T,I,T,U,L,O
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=>{
      setTimeout(function(){
        elemento.innerHTML += letra;
      }, 110 * i)
    })
  }
  
  typeWriter(titulo);
  });
}
initTypeWriter();
// EFEITO MAQUINA DE DIGITAR //

const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

function scrollSuave(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', scrollSuave);
})