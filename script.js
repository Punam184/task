document.addEventListener("click", function (event) {
    const gifContainer = document.getElementById("gif-container");

    // Get the current position of the wizard
    const rect = gifContainer.getBoundingClientRect();
    const currentX = rect.left + rect.width / 2; // Center x-coordinate of the wizard
    const currentY = rect.top + rect.height / 2; // Center y-coordinate of the wizard

    // Get the clicked position
    const targetX = event.clientX;
    const targetY = event.clientY;

    // Move the wizard to the clicked position
    gifContainer.style.left = `${targetX - rect.width / 2}px`;
    gifContainer.style.top = `${targetY - rect.height / 2}px`;

    // Determine if the wizard should face left or right
    const gif = document.getElementById("gif");
    if (targetX < currentX) {
        // Face right (default orientation)
        gif.style.transform = `scaleX(1)`; // No flipping
    } else {
        // Face left
        gif.style.transform = `scaleX(-1)`; // Flip horizontally
    }
});
