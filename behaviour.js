const tabs = document.querySelectorAll('[data-tab-target]')
const tabcontent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabcontent.forEach(tabcontent => {
      tabcontent.classList.remove('active')
    });
    target.classList.add('active')
  })
}); 