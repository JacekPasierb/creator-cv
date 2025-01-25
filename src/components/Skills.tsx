// Skills.jsx
import React from 'react';

const Skills = ({ skills }) => (
  <section className="skills-section">
    <h2>Umiejętności</h2>
    {Object.entries(skills).map(([category, items], index) => (
      <div key={index} className="skills-category">
        <h3>{category.toUpperCase()}</h3>
        <ul>
          {items.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Skills;