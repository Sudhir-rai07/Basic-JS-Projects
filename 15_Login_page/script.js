const lables = document.querySelectorAll("label")
const iconEl = document.querySelector(".icon")
const passEl = document.querySelector('.pass')

lables.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=>
        `<span style="transition-delay:${idx*50}ms">${letter}</span>`
    )
    .join('')
})


// if(passEl.value == ""){
//     iconEl.display.hidden = "true"
// }


function showpass(){
    iconEl.classList.toggle('show')
}
iconEl.addEventListener('click', ()=>{
    iconEl.classList.toggle('show')
    if(iconEl.classList.contains('show')){
        passEl.type = 'text';
        iconEl.innerText = "hide"
        }
        else{
            passEl.type = 'password';
            iconEl.innerText = "show"
        }
})


