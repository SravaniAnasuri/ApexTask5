// Call-to-action button alert
document.querySelector(".cta-btn").addEventListener("click", () => {
  alert("Welcome to your fitness journey!");
});

// Contact form submission simulation
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you shortly.");
});
  