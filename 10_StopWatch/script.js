const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const clearBtn = document.getElementById('clear')
const ms = document.querySelector('.ms')
const second = document.querySelector('.second')
const minute = document.querySelector('.minute')

let hour = 0;
let min = 0;
let sc = 0;
let mSecond = 0;
let count = 0;

const miliS = () =>{
    count ++
    ms.innerHTML = count
    // console.log(count)
    if(count > 99){
        count = 0;
        sc++
        second.innerHTML = sc
if( sc>59){
    second.innerHTML = '00'
    sc = 0
    min++
    minute.innerHTML = min
}
    }
    
}

let interval ;


startBtn.addEventListener('click', ()=>{
    startBtn.disabled = true;
    if(startBtn.disabled = true){
        stopBtn.disabled = false
    }
    interval =  setInterval(miliS, 10);  
})
stopBtn.addEventListener('click', ()=>{
    stopBtn.disabled = true
    if(stopBtn.disabled = true){
        startBtn.disabled = false
    }
    clearInterval(interval)
})
clearBtn.addEventListener('click', ()=>{
    // clearInterval(interval)
    count = 0;
    sc = 0
    min = 0
    ms.innerHTML = count
    second.innerHTML = sc
    minute.innerHTML = min
})