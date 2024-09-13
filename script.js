// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const moveup = document.querySelector(".checkout");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default jump behavior

    const targetId = this.getAttribute("href").substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    // Close mobile menu after clicking (if active)
    navList.classList.remove("active");
  });
});

// for moveup smoothly
moveup.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = document.querySelector("#arrowpick");
  window.scrollTo({
    top: targetId.offsetTop,
    behavior: "smooth",
  });
});
