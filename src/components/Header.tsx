// Header.jsx
import React from "react";

const Header = ({ name, role, contact }) => (
  <header className="portfolio-header">
    <h1>{name}</h1>
    <h2>{role}</h2>
    <p>
      Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
    <p>
      Telefon: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
    </p>
    <p>
      Strona:{" "}
      <a href={contact.website} target="_blank" rel="noopener noreferrer">
        {contact.website}
      </a>
    </p>
    <p>
      GitHub:{" "}
      <a href={contact.github} target="_blank" rel="noopener noreferrer">
        {contact.github}
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        {contact.linkedin}
      </a>
    </p>
  </header>
);

export default Header;
