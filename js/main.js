document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const openNav = () => {
    burger.addEventListener('click', () => {
      navList.classList.toggle('show');
      burger.classList.toggle('close');
    });
  }
  openNav();
});