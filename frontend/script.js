function toggleTheme() {
  document.body.classList.toggle("light");
}

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Contact form backend
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    };

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
document.addEventListener("DOMContentLoaded", () => {

  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      date: e.target[2].value,
      time: e.target[3].value,
      people: e.target[4].value
    };

    try {
      const res = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      alert(result.message || "Booking successful!");
      bookingForm.reset();

    } catch (err) {
      alert("Booking failed ❌ Backend not connected");
    }
  });

});
    alert("Message sent successfully!");
    form.reset();
  });
});