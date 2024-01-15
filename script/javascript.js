/* EFEITO DA ANIMAÇÃO PARA OS LADOS OU PARA CIMA
window.SimpleAnime=class{constructor(){this.items=document.querySelectorAll("[data-anime]"),this.init()}animateItems(){this.items.forEach(t=>{const e=Number(t.getAttribute("data-anime"));isNaN(e)||setTimeout(()=>{t.classList.add("anime")},e)})}handleVisibility(){void 0!==document.visibilityState?"visible"===document.visibilityState&&this.animateItems():this.animateItems()}init(){this.handleVisibility=this.handleVisibility.bind(this),this.handleVisibility(),document.addEventListener("visibilitychange",this.handleVisibility)}}
if (window.SimpleAnime) {
  new SimpleAnime();
}
*/

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


// EFEITO SCROLL SUAVE
function initScrollSuave(){
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
}
initScrollSuave();
// EFEITO SCROLL SUAVE //

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
      }, 80 * i)
    })
  }
  
  typeWriter(titulo);
  });
}
initTypeWriter();
// EFEITO MAQUINA DE DIGITAR //

// EFEITO ANIMASCROLL 
function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight *0.6;
  
  function animaScroll(){
    sections.forEach((section)=>{
      const sectionTop = section.getBoundingClientRect().top -windowMetade;
  
      if(sectionTop < 0){
        section.classList.add('ativo');
      } else{
        section.classList.remove('ativo');
      }
    })
  }
  
  window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll();
// EFEITO ANIMASCROLL  //

// EFEITO ANIMA SCROLL PARA OS CARDS DAS ESPECIALIDAES 

function initAnimacaoScroll1() {
  const liScroll = document.querySelector(".js-li-scroll1");
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    const li = liScroll;
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if (liTop < 0) {
        li.classList.add("ativo");
      } else {
        li.classList.remove("ativo");
      }
    };
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll1();

function initAnimacaoScroll2() {
  const liScroll = document.querySelector(".js-li-scroll2");
  const windowMetade = window.innerHeight * 0.8;

  function animaScroll() {
    const li = liScroll;
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if (liTop < 0) {
        li.classList.add("ativo");
      } else {
        li.classList.remove("ativo");
      }
    };

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll2();

function initAnimacaoScroll3() {
  const liScroll = document.querySelector(".js-li-scroll3");
  const windowMetade = window.innerHeight * 0.8;

  function animaScroll() {
    const li = liScroll;
      const liTop = li.getBoundingClientRect().top - windowMetade;
      if (liTop < 0) {
        li.classList.add("ativo");
      } else {
        li.classList.remove("ativo");
      }
    };

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll3();
// EFEITO ANIMA SCROLL PARA OS CARDS DAS ESPECIALIDAES  //