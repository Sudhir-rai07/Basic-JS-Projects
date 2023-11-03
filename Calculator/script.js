let string = "";

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {

    if(e.target.innerHTML == '='){
        string = eval(string) // Read eval() function
        input_box.value = string;
    } 
    else if(e.target.innerHTML == 'AC'){
        string = '';
        input_box.value = string;
    }
    
    else {
    // console.log(e.target); --> Prints button elem
    string = string + e.target.innerHTML;
    // console.log(string) --> Prints innerHTML of button elem
    input_box.value = string;
    }

  });
});
