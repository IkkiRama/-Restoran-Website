//Select element function

const times = document.querySelector(".fa-times");
const bars = document.querySelector(".fa-bars");

bars.addEventListener("click", () => {
  document.body.classList.add("open");
});

times.addEventListener("click", () => {
  document.body.classList.remove("open");
});

// scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "50rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
