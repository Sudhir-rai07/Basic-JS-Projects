const btnEl = document.querySelector('.btn');
let colors = ["red", "green", "blue", "black", "yellow", "hotpink", "cyan", "tomato", "pink"]



function randCol(){
    let randon = Math.floor(Math.random() * 9) 
    document.body.style.background = colors[randon]
    console.log(randon)
}

// function playMusic(){
//     let audio = new Audio("Neele Neele Ambar Par Chand Jab Aaye.mp3");
//     audio.play();

//     setTimeout(() => {
//         audio.pause();
//     }, 8000);
// }

btnEl.addEventListener('click', randCol);