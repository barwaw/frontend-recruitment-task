// DOM elements
const heroButton = document.querySelector('.hero-section__button')
const modal = document.querySelector('.modal')
const modalExitButton = document.querySelector('.modal__exit')
const modalCounter = document.querySelector('.modal__counter')
const modalResetButton = document.querySelector('.modal__button')


// Retrive number of button clicks
let clickCounter = JSON.parse(localStorage.getItem('counter'))
if(!clickCounter) localStorage.setItem('counter', 0)


// Event listeners
heroButton.addEventListener('click', e => {
  modal.classList.remove('disabled')
  
  clickCounter += 1
  localStorage.setItem('counter', clickCounter)
  updateCounter()

  // Show reset button
  if(clickCounter > 5) {
    modalResetButton.classList.remove('disabled')
  }
})

modalExitButton.addEventListener('click', e => {
  modal.classList.add('disabled')
})

// Exit modal if clicked outside
modal.addEventListener('click', e => {
  if(e.target === modal) modal.classList.add('disabled')
})

modalResetButton.addEventListener('click', e => {
  modalResetButton.classList.add('disabled')

  clickCounter = 0
  localStorage.setItem('counter', clickCounter)
  updateCounter()
})


// Additional functions
const updateCounter = () => {
  if(clickCounter === 1) {
    modalCounter.textContent = `${clickCounter} time`
  } else {
    modalCounter.textContent = `${clickCounter} times`
  }
}