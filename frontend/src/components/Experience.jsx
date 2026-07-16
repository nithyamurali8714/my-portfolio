import React from "react";
import "./Experience.css";

const EXPERIENCES = [
  {
    year: "2026 – Present",
    role: "Full Stack Development Intern",
    company: "Thiranex",
    description:
      "Working on AI-powered and remote-based full stack web development projects using modern web technologies and the MERN Stack."
  },
  {
    year: "2026",
    role: "Full Stack Development Intern",
    company: "DecodeLabs",
    description:
      "Developed full stack web applications using React.js, Node.js, Express.js, and MongoDB while gaining practical industry experience."
  },
  {
    year: "2026",
    role: "Frontend Development Intern",
    company: "FlyRank",
    description:
      "Designed and developed responsive user interfaces using HTML, CSS, JavaScript, and React.js."
  },
  {
    year: "2026",
    role: "AI & Prompt Engineering Intern",
    company: "Vault of Code",
    description:
      "Worked with Generative AI tools, prompt engineering techniques, and AI-based application development."
  },
  {
    year: "2026",
    role: "MERN Stack Training",
    company: "MashupStack Institute",
    description:
      "Completed hands-on training in React.js, Node.js, Express.js, MongoDB, REST APIs, and full stack web application development."
  },
  {
    year: "2024",
    role: "Frontend Development Intern",
    company: "KELTRON",
    description:
      "Worked on frontend web development using HTML, CSS, and JavaScript, focusing on responsive and user-friendly interfaces."
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">

        <div className="eyebrow">
          04 · EXPERIENCE
        </div>

        <h2 className="section-title">
          Experience & Training
        </h2>

        <div className="experience-list">

          {EXPERIENCES.map((item, index) => (
            <div className="experience-card" key={index}>

              <span className="experience-year">
                {item.year}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}