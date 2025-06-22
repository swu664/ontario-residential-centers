// load nav-bar
document.addEventListener("DOMContentLoaded", () => {
    fetch("/nav-bar.html")
        .then(response => response.text())
        .then(data => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = data;
            const div = wrapper.querySelector('div');
            const nav = wrapper.querySelector('nav');

            document.getElementById("logo-container").appendChild(div);
            document.getElementById("nav-container").appendChild(nav);

            const toggle = document.getElementById("hamburger");
            const navBar = document.getElementById("nav-bar");

            if (toggle && navBar) {
                toggle.addEventListener("click", () => {
                navBar.classList.toggle("show");
                });
            } else {
                console.error("Menu toggle or nav bar not found after inserting nav-bar.html");
            }
        })
        .catch(error => {
            console.error("Navbar failed to load:", error);
        });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => observer.observe(section));
});