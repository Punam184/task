document.addEventListener("click", function(event) {
    const gif = document.getElementById("gif-container");
  
    const x = event.clientX - gif.offsetWidth / 2; 
    const y = event.clientY - gif.offsetHeight / 2; 
  
    
    gif.style.left = `${x}px`;
    gif.style.top = `${y}px`;
  });
  