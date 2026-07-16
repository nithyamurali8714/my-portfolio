import React from "react";
import "./Skills.css";

const GROUPS = [
  {
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive Web Design"
    ]
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },
  {
    label: "Database",
    items: [
      "MongoDB",
      "Mongoose"
    ]
  },
  {
    label: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Netlify"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">

        <div className="eyebrow">
          02 · TECHNICAL SKILLS
        </div>

        <h2 className="section-title">
          Technologies I Work With
        </h2>

        <div className="skills-grid">

          {GROUPS.map((group) => (
            <div className="skill-card" key={group.label}>

              <h3>{group.label}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}