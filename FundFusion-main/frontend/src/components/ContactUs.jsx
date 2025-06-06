import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/ContactUs.css"; // Import custom CSS for background

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact", {
        name,
        email,
        message,
      });
      setStatus("Thank you for contacting us! We will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Error: " + err.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="contact-bg d-flex justify-content-center align-items-center">
      <div className="contact-form-container p-4 rounded shadow">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {status && <div className="alert alert-info">{status}</div>}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
