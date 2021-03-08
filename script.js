const screen = document.querySelector('#screen')
document.addEventListener("click", e=>{
  if(e.target.matches('.clear')){
        screen.value=""
  }
  else if(e.target.matches('.equal')){
        screen.value = eval(screen.value)
  }
  else if(e.target.matches('.digit')){
        screen.value+=e.target.dataset.value
  }
  else if(e.target.matches('.del')){
        screen.value=screen.value.slice(0,-1)
  }
})