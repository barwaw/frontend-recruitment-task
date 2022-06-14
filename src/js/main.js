const heroButton = document.querySelector('.hero-section__button')
const modal = document.querySelector('.modal')
const modalExitButton = document.querySelector('.modal__exit')
const modalCounter = document.querySelector('.modal__counter')
const modalResetButton = document.querySelector('.modal__button')
let clickCounter = 0

heroButton.addEventListener('click', e => {
  modal.classList.remove('disabled')
})

modalExitButton.addEventListener('click', e => {
  modal.classList.add('disabled')
})

modal.addEventListener('click', e => {
  if(e.target === modal) modal.classList.add('disabled')
})