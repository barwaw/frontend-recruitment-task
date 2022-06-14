const heroButton = document.querySelector('.hero-section__button')
const modal = document.querySelector('.modal')
const modalExitButton = document.querySelector('.modal__exit')
const modalCounter = document.querySelector('.modal__counter')
const modalResetButton = document.querySelector('.modal__button')

let clickCounter = JSON.parse(localStorage.getItem('counter'))
if(!clickCounter) localStorage.setItem('counter', 0)

heroButton.addEventListener('click', e => {
  modal.classList.remove('disabled')
  clickCounter += 1
  localStorage.setItem('counter', clickCounter)
  updateCounter()
  if(clickCounter > 5) {
    modalResetButton.classList.remove('disabled')
  }
})

modalExitButton.addEventListener('click', e => {
  modal.classList.add('disabled')
})

modal.addEventListener('click', e => {
  if(e.target === modal) modal.classList.add('disabled')
})

modalResetButton.addEventListener('click', e => {
  clickCounter = 0
  localStorage.setItem('counter', clickCounter)
  modalResetButton.classList.add('disabled')
  updateCounter()
})



const updateCounter = () => {
  if(clickCounter === 1) {
    modalCounter.textContent = `${clickCounter} time`
  } else {
    modalCounter.textContent = `${clickCounter} times`
  }
}