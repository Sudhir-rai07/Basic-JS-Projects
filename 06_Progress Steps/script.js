const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

activeClasses = 1;

next.addEventListener('click', ()=>{
    activeClasses++

    if(activeClasses > circles.length){
        activeClasses = circles.length
    }
    
    update()
})


prev.addEventListener('click', ()=>{
    activeClasses--
    if(activeClasses<1){
        activeClasses = 1
    }

    update()
})


function update(){
   circles.forEach((circle,idx)=>{
    if(idx<activeClasses){
        circle.classList.add('active')
    } else{
        circle.classList.remove('active')
       
    }
   })

   const actives = document.querySelectorAll('.active')
   progress.style.width = (actives.length -1)/ (circles.length -1) * 100 +  '%'


   if(activeClasses === 1){
    prev.disabled = true
   } else if(activeClasses === circles.length){
    next.disabled = true
   } else{
    prev.disabled = false
    next.disabled = false
   }

  
}
function reloadPage() {
	const block = document.body
		? document.body.hasAttribute('data-server-no-reload')
		: false;
	if (block) return;
	window.location.reload();
}


