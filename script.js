const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#main-nav')

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi')
  navigation.classList.toggle('is-open', isOpen)
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false)
})

document.querySelector('.print-button').addEventListener('click', () => {
  window.print()
})
