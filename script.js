function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.querySelector(".open-btn");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    openBtn.classList.remove("toggle");
  } else {
    sidebar.style.width = "250px";
    openBtn.classList.add("toggle");
  } //end of if-else

} //end of toggleSidebar()

document.addEventListener("DOMContentLoaded", (event) => {
  const equalSign = document.querySelector(".open-btn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      equalSign.classList.add("hidden");
      equalSign.classList.remove("visible");
    } else {
      equalSign.classList.remove("hidden");
      equalSign.classList.add("visible");
    }
  }); //end of scroll event listener
  
});//end of EventListener
