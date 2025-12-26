/* TYPING EFFECT */
const text = "Dhruv Singh Adhikari";
let index = 0;
const speed = 120;

function type() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
type();

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => observer.observe(section));
