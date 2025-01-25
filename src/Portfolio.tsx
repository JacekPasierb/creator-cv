import data from "./data/portfoliodata.json";
import ExportToPDF from "./components/ExportToPDF.js";

const Portfolio = () => (
  <div id="portfolio" className="portfolio-container">
    <header>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </header>
    <main>
      <h2>Projekty</h2>
      <ul>
        {data.projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Zobacz projekt
            </a>
          </li>
        ))}
      </ul>
    </main>

    {/* Dodaj przycisk eksportu PDF */}
    <ExportToPDF />
  </div>
);

export default Portfolio;
