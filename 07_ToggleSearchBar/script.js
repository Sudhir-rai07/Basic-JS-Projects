const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const search_image = document.querySelector('.search-impage')

console.log("Hey")

btn.addEventListener('click', ()=>{
    search.classList.toggle('active');
    input.focus()
})