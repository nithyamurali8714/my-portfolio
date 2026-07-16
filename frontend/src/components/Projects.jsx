import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolderOpen,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const FALLBACK_PROJECTS = [
  {
    _id: "1",
    title: "Event Registration Management System",
    description:
      "A full-stack Event Registration Management System developed using the MERN Stack. It enables users to register for events while allowing administrators to efficiently manage registrations through complete CRUD operations.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    githubLink: "",
    liveLink: "",
  },
  {
    _id: "2",
    title: "Smart Queue & Crowd Monitoring System",
    description:
      "A smart hospital queue management platform featuring QR-based registration, real-time queue tracking, waiting time prediction, and crowd monitoring to improve patient experience.",
    techStack: ["HTML", "CSS", "JavaScript", "Python"],
    githubLink: "",
    liveLink: "",
  },
  {
    _id: "3",
    title: "Smart Solo Travel Planning & Safety System",
    description:
      "A responsive travel planning web application that provides itinerary management, emergency assistance, travel safety features, and location-based services for solo travelers.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "",
    liveLink: "",
  },
  {
    _id: "4",
    title: "Infrared Pedestrian Detection using AI",
    description:
      "An AI-powered pedestrian detection system that combines GAN-generated infrared images with YOLO-based object detection to improve pedestrian visibility in low-light environments.",
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "GAN",
    ],
    githubLink: "",
    liveLink: "",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Fallback projects will be displayed.
      });
  }, []);

  return (
    <section id="projects">
      <div className="wrap">

        <div className="eyebrow">
          03 · FEATURED PROJECTS
        </div>

        <h2 className="section-title">
          Projects I've Built
        </h2>

        <p className="section-subtitle">
          A collection of academic and personal projects developed using
          Full Stack Web Development and Artificial Intelligence
          technologies.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project._id}
            >

              <div className="project-top">

                <FaFolderOpen className="folder-icon" />

                <div className="project-links">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>

              </div>

              <h3>{project.title}</h3>

              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-tags">

                {project.techStack.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}