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
