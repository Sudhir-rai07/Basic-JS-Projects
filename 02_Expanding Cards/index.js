const lisa = document.querySelectorAll('.lisa')
lisa.forEach(lalisa =>{
    lalisa.addEventListener('click', ()=>{
        removeActiveClasses()
        lalisa.classList.add('active')
    })
})

function removeActiveClasses(){
    lisa.forEach(lalisa =>{
        lalisa.classList.remove('active')
    })
}

