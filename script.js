// Smooth scroll for elements with data-scroll (used on buttons & back-to-top)
document.querySelectorAll("[data-scroll]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const targetSelector = btn.getAttribute("data-scroll");
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Update footer year on about page
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
