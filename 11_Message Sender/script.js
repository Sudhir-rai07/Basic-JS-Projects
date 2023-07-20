const btn = document.getElementById('btn')
const input = document.querySelector('input')
const text = document.querySelector('.text')
const err = document.querySelector('.error')


 function runThis(){
    if(input.value == ""){
        err.innerHTML = "! Kuchh to likh le bhai"
    //    err.innerHTML = ""
    } 
}
function alertRemove () {
    err.innerHTML = ""
}
function inputInnerHTML () {
input.value = ""
}


btn.addEventListener('click', ()=>{
   setTimeout(runThis, 10);
  setTimeout(alertRemove, 1000);
  setTimeout(inputInnerHTML, 20);
    
    text.innerHTML = input.value
    
   
})