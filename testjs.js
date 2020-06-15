const formslid = () => {
  const boutton = document.querySelector('.butn');
  const form = document.querySelector('.form');

  boutton.addEventListener('click',()=>{
    form.classList.toggle('form-active')
  })
}
formslid();
