const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.back');
  const navlink = document.querySelectorAll('.back li');
  const container = document.querySelector('.container');

  //toggle nav
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')
    container.classList.toggle('container-desa')

  //animation
  navlink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    }else {
      link.style.animation = `NavlinkFade 0.5s ease forwards ${index / 5 }s`;}
  })
  burger.classList.toggle('toggle');
  })
}
navSlide();

const formslid = () => {
  const formdea = document.querySelector('.form-active');
  const boutton = document.getElementById('cbutn');
  const form = document.querySelector('.form');
  const fcross = document.querySelector('.navc');

  boutton.addEventListener('click',()=>{
    form.classList.toggle('form-active')
  })
}
formslid();

const formup = () => {
  const form = document.querySelector('.form');
  const fcross = document.querySelector('.navc');

  fcross.addEventListener('click', ()=>{
    form.classList.toggle('form-de')
  })

}
formup();
