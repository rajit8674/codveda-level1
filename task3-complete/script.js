
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Navbar Activ krne ke liye
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

//Contact Form Validation ke liye
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Email Validation ke liye
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.length < 3) {
    msg.style.color = "red";
    msg.textContent = "Name must be at least 3 characters.";
  } else if (!email.match(emailPattern)) {
    msg.style.color = "red";
    msg.textContent = "Enter a valid email address.";
  } else if (message.length < 10) {
    msg.style.color = "red";
    msg.textContent = "Message must be at least 10 characters.";
  } else {
    msg.style.color = "lightgreen";
    msg.textContent = "Message sent successfully!";
    form.reset();
  }
});
