const openMenu = document.querySelector('#openMenu')
const closeMenu = document.querySelector('#closeMenu')
const menu = document.querySelector('#menu')

openMenu.addEventListener('click', () => {
  menu.style.display = 'flex'

  menu.style.right = (menu.offsetWidth * -1) + 'px'

  openMenu.style.display = 'none'
  setTimeout(() => {
    menu.style.opacity = '1'

    menu.style.right = '0'
  }, 10)
  console.log('abriu')

})

closeMenu.addEventListener('click', () => {
  menu.style.opacity = '0'

  menu.style.right = (menu.offsetWidth * -1) + 'px'

  settimeout(() => {
    menu.removeAttribute('style')
  }, 20)
  openMenu.removeAttribute('style')
  console.log('fechou')
})