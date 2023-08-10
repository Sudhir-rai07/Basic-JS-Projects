const btnEl = document.querySelector("button");
const quoteSec = document.querySelector(".quote");
const author = document.querySelector("#author");
const apiUrl = "https://dummyjson.com/quotes/random";

btnEl.addEventListener('click', ()=>{
  let api = fetch(apiUrl)
    .then((x) => {
      return x.json();
    })
    .then((value) => {
      ihtml = "";
    //   console.log(value);
        quoteSec.innerHTML =  `<div class="quote-sec">${value.quote}</div>
        <br>
        <span id="author">Author : ${value.author} </span>`
    });
})
