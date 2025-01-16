document.addEventListener("click", function (event) {
    const gifContainer = document.getElementById("gif-container");
    const rect = gifContainer.getBoundingClientRect();
    const currentX = rect.left + rect.width / 2;  
    const currentY = rect.top + rect.height / 2; 
    const targetX = event.clientX;
    const targetY = event.clientY;
    gifContainer.style.left = `${targetX - rect.width / 2}px`;
    gifContainer.style.top = `${targetY - rect.height / 2}px`;
    const gif = document.getElementById("gif");
    if (targetX < currentX) {
        // Face right (default orientation)
        gif.style.transform = `scaleX(1)`;  
    } else {
        // Face left
        gif.style.transform = `scaleX(-1)`; 
    }
});
