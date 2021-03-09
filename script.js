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
  else if(e.target.matches('.op')){
      let s = screen.value
      if((s.charAt(s.length-1)=="-" || s.charAt(s.length-1)=="+") && 
      (e.target.dataset.value=="*" || e.target.dataset.value=="/")){
            screen.value=screen.value.slice(0,-1)
            screen.value+=e.target.dataset.value
      }
      else if(s.charAt(s.length-1)!=e.target.dataset.value){
            screen.value+=e.target.dataset.value
      }
  }
  else if(e.target.matches('.del')){
        screen.value=screen.value.slice(0,-1)
  }
})