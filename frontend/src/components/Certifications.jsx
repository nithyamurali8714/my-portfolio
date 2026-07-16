import React from "react";
import "./Certifications.css";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";
import cert7 from "../assets/cert7.jpg";
import cert8 from "../assets/cert8.jpg";

const certificates = [
  {
    image: cert1,
    title: "EcoVolt: AI-Based Energy Management",
    issuer: "IEEE Student Branch CEAL",
  },
  {
    image: cert2,
    title: "Mastering Next.js Bootcamp",
    issuer: "DevTown",
  },
  {
    image: cert3,
    title: "Rapid Prototyping Workshop",
    issuer: "IEEE",
  },
  {
    image: cert4,
    title: "AI Workshop",
    issuer: "NxtWave",
  },
  {
    image: cert5,
    title: "Industrial Visit",
    issuer: "IEEE Student Branch",
  },
  {
    image: cert6,
    title: "Technical Talk",
    issuer: "IEEE Student Branch",
  },
  {
    image: cert7,
    title: "Workshop Participation",
    issuer: "College Event",
  },
  {
    image: cert8,
    title: "Professional Development",
    issuer: "Training Program",
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">

        <div className="eyebrow">
          06 · CERTIFICATIONS
        </div>

        <h2 className="section-title">
          Certifications & Professional Development
        </h2>

        <div className="certificate-grid">

          {certificates.map((cert, index) => (

            <div className="certificate-card" key={index}>

              <img
                src={cert.image}
                alt={cert.title}
              />

              <div className="certificate-content">

                <h3>{cert.title}</h3>

                <p>{cert.issuer}</p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}