

(function displayTime(){
    setInterval(() => {
        let date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        console.log(hour, min, sec)
        
        document.querySelector("#getHour").innerHTML = hour
        document.querySelector("#getMin").innerHTML = min
        document.querySelector("#getSec").innerHTML = sec 

        if(min<10 ){
            document.querySelector("#getMin").innerHTML = "0"+min 
        }
        if(sec<10 ){
            document.querySelector("#getSec").innerHTML = "0"+sec 
        }

    }, 1000);



})()