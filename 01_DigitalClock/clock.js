let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('second');

function displayTime(){
  let hours = new Date().getHours();
   let minutes = new Date().getMinutes();
   let seconds = new Date().getSeconds();
   let el = document.getElementById('ampm')

   
    if(hours > 12){
        hours = hours - 12;
        el.innerHTML = "PM"
    }
    if(hours< 10){
        hours= "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;

    }
    h.innerText = hours;
     m.innerText = minutes; 
     s.innerText = seconds;
}
let d = new Date();
console.log(d);
setInterval(displayTime, 1000);


