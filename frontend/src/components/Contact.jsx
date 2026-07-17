import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_pk4o7mm",
        "template_flqjiaj",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "FcWkw8D9i4zThfLBh"
      );

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">
          07 · CONTACT
        </div>

        <h2 className="section-title">
          Get In Touch
        </h2>

        <p className="contact-intro">
          I am currently seeking internship and entry-level opportunities
          in Full Stack Web Development and Artificial Intelligence.
          Feel free to reach out for collaborations, internships,
          freelance work, or exciting projects.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:nithyamurali8714@gmail.com">
              nithyamurali8714@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/nithyamurali8714"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nithyamurali8714
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/nithya-murali-619223414/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nithya-murali-619223414
            </a>
          </p>

          <p>
            <strong>Phone:</strong> +91 8714748271
          </p>

          <p>
            <strong>Location:</strong> Kollam, Kerala, India
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Message</label>

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="form-status form-status--ok">
              ✅ Message sent successfully. Thank you!
            </p>
          )}

          {status === "error" && (
            <p className="form-status form-status--err">
              ❌ Unable to send your message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}