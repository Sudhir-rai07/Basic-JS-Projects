const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', showBox)

function showBox(){
    const trigerPoint = window.innerHeight * 5 /7

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop<trigerPoint){
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}