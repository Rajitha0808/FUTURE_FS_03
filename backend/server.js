const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];
let bookings = [];

/* ================= CONTACT ================= */
app.post("/contact", (req, res) => {
  messages.push(req.body);
  res.json({ message: "Message received successfully ✅" });
});

/* ================= BOOKING SYSTEM ================= */
app.post("/book", (req, res) => {
  const { name, email, date, time, people } = req.body;

  if (!name || !email || !date || !time || !people) {
    return res.status(400).json({ message: "All fields required ❌" });
  }

  const newBooking = {
    id: Date.now(),
    name,
    email,
    date,
    time,
    people
  };

  bookings.push(newBooking);

  console.log("New Booking:", newBooking);

  res.json({ message: "Table booked successfully 🍽️" });
});

/* ================= VIEW DATA (ADMIN) ================= */
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});