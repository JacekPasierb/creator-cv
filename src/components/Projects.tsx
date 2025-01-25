// Projects.jsx
import React from 'react';

const Projects = ({ projects }) => (
  <section className="projects-section">
    <h2>Projekty</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>
            <a href={project.repoFrontend} target="_blank" rel="noopener noreferrer">Frontend Repo</a>
            {project.repoBackend && (
              <span> | <a href={project.repoBackend} target="_blank" rel="noopener noreferrer">Backend Repo</a></span>
            )}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;