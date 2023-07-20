const box = document.querySelector('.box');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', ()=>{
    box.classList.add('active')
    btn2.style.opacity = '1'
    btn1.style.opacity = '0'
})

btn2.addEventListener('click', ()=>{
    box.classList.remove('active')
    btn2.style.opacity = '0'
    btn1.style.opacity = '1'
})
