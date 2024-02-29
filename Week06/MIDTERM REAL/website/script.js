function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.querySelector(".open-btn"); // Get the open button
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        openBtn.classList.remove("toggle"); // Switch back to hamburger icon
    } else {
        sidebar.style.width = "250px";
        openBtn.classList.add("toggle"); // Change to X icon
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const equalSign = document.querySelector('.open-btn'); // Adjust the selector to target your "=" sign

    window.addEventListener('scroll', function() {
        // Check if the page is scrolled more than 50 pixels
        if (window.scrollY > 50) {
            equalSign.classList.add('hidden');
            equalSign.classList.remove('visible');
        } else {
            equalSign.classList.remove('hidden');
            equalSign.classList.add('visible');
        }
    });
});