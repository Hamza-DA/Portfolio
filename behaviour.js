const tabs = document.querySelectorAll('[data-tab-target]')
const tabcontents = document.querySelectorAll('[data-tab-content]')
const loaders = document.querySelector('.loader')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabcontents.forEach(tabcontent => {
      tabcontent.classList.remove('active')
    });

    tabs.forEach(tab => {
      tab.classList.remove('activea')
      loaders.classList.add('loader-active')
    });


    setTimeout(() => {
      tab.classList.add('activea')
      target.classList.add('active')
      loaders.classList.remove('loader-active')

      }, 500);


  })
});
const burger = document.querySelector('.burger')
const sideNav = document.querySelector('.back')
const burgerl = document.querySelectorAll('lineup, linedown')
const main = document.querySelector('.homepage')


burger.addEventListener('click', () => {
  sideNav.classList.toggle('back-active');
  burger.classList.toggle('toggle');
  main.classList.toggle('homepage-ut');

});
const navLinks = document.querySelectorAll('ul li')
navLinks.forEach(link => {
  link.addEventListener('click', () =>{
    sideNav.classList.remove('back-active');
    burger.classList.remove('toggle');

  },)
});

const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const butn = document.querySelector('.alerts')
const para = document.getElementById('para')

form.addEventListener('submit', (e) => {
  if (name.value === '' || name.value == null) {
    butn.classList.add('alert-chek')
  }
      e.preventDefault()
})

//////////////////
const navSlide = () => {
  const navlink = document.querySelectorAll('.nav-links li');

  //animation
  navlink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    }else {
      link.style.animation =  `navlinks 0.5s ease forwards ${index / 5 }s`;}
      
    })
}
navSlide();
