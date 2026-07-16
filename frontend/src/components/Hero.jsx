import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const ROLES = [
  "Full Stack Developer",
  "AI & MERN Stack Enthusiast",
  "B.Tech Computer Science Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">

        {/* Left Side */}

        <div className="hero-left">

          <p className="eyebrow">
            👋 Welcome to my Portfolio
          </p>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span>Nithya Murali</span>
          </h1>

          <h3 className="hero-role">
            {ROLES[roleIndex]}
          </h3>

          <p className="hero-desc">
            I am a final-year B.Tech Computer Science student with a strong
            interest in Full Stack Web Development and Artificial Intelligence.
            I enjoy building scalable MERN Stack applications, exploring modern
            web technologies, and developing solutions for real-world problems.
          </p>

          <div className="hero-cta">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/nithyamurali8714"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nithya-murali-619223414/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nithyamurali8714@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <div className="hero-image">
            <img
              src={profile}
              alt="Nithya Murali"
            />
          </div>

          <div className="hero-panel">

            <div className="hero-panel-bar">
              <span></span>
              <span></span>
              <span></span>
              <p>developer.js</p>
            </div>

            <pre className="hero-code">
{`const developer = {
  name: "Nithya Murali",

  role: "Full Stack Developer",

  education: "B.Tech Computer Science",

  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git"
  ],

  location: "Kerala, India",

  status: "Open to Work"
};`}
            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}