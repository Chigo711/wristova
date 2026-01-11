const nav = document.getElementById("navbar");
const hero = document.querySelector(".heroSection");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // 50px from the top
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("scrolled"); // add background when hero is out of view
      } else {
        nav.classList.remove("scrolled"); // remove background when hero is visible
      }
    });
  },
  { threshold: 0 } // trigger when 10% of hero is visible
);

// Observe the hero section
observer.observe(hero);

const signIn = document.querySelector(".signin");

signIn.addEventListener("click", function () {
  alert("Hello you just clicked the signin button");
});
