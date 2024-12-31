document.addEventListener("DOMContentLoaded", () => {
    // Colors to alternate between
    const colors = ["#1E90FF", "#32CD32"]; // Cold blue and warm green
    let currentColorIndex = 0;

    // Function to change the background color
    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change the background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);

    // Initial background color change
    changeBackgroundColor();
});