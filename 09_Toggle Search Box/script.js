const searchBar = document.querySelector('.search-bar')
const btn = document.getElementById('btn1')

btn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active')
})