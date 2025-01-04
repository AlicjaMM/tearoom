document.addEventListener("DOMContentLoaded", () => {
    // Colors to alternate between
    const colors = ["#1E90FF", "#32CD32"]; // Cold blue and warm green
    let currentColorIndex = 0;

    const navItems = document.querySelectorAll(".nav-item");
    const main = document.querySelector("main");

    // Content for each section
    const content = {
        tea: `
            <h1>Welcome to Tea</h1>
            <p>This section is all about Tea.</p>
        `,
        herbs: `
            <h1>Welcome to Herbs</h1>
            <p>This section is all about Herbs.</p>
        `,
        recipes: `
            <h1>Welcome to Recipes</h1>
            <p>This section contains delicious Recipes.</p>
        `,
        resources: `
            <h1>Welcome to Resources</h1>
            <p>This section provides Resources and guides.</p>
        `,
    };

    // Function to change the background color
    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change the background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);

    // Initial background color change
    changeBackgroundColor();



    // Event listener for each nav item
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent the default anchor behavior

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove("active"));

            // Add active class to clicked item
            item.classList.add("active");

            // Update main content
            const section = item.getAttribute("data-section");
            main.innerHTML = content[section];
        });
    });
});