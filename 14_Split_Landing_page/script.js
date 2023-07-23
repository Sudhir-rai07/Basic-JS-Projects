const leftEl = document.querySelector('.left')
const rightEl = document.querySelector('.right')
const containerEl = document.querySelector('.container')

leftEl.addEventListener('mouseenter', ()=>{containerEl.classList.add('left-active')})
leftEl.addEventListener('mouseleave', ()=>{containerEl.classList.remove('left-active')})


rightEl.addEventListener('mouseenter', ()=>{containerEl.classList.add('right-active')})
rightEl.addEventListener('mouseleave', ()=>{containerEl.classList.remove('right-active')})