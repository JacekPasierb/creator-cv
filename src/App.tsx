// App.jsx
import "./App.css";
import Name from "./components/Name";
import skills from "./data/skills";
import { language } from "./data/language";
import { certificates } from "./data/certificates";
import ExportToPDF from "./components/ExportToPDF";
import { experiences } from "./data/experiences";
import { projects } from "./data/projects";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

const App = () => (
  <div className="portfolio-container">
    <div className="row">
      <div className="columnLeft lineMid"></div>
      <div className="columnRight lineMid"></div>
    </div>
    <div className="row marginLine">
      <div className="columnLeft lineSmall"></div>
      <div className="columnRight"></div>
    </div>
    <Name />
    <div className="row">
      <div className="columnLeft">
        <div className="pictureContainer">
          <img src="./public/fot.jpg" className="pictureCV" alt="moje foto" />
          <div className="pictureLine"></div>
        </div>
        <div className="columnContainer">
          <div className="bio">
            <a href="https://jacekpasierb.netlify.app">
              <FaUser />
               https://jacekpasierb.netlify.app
            </a>
            <a href="tel:+48724862714">
              <FaPhoneAlt />
              +48 724862714
            </a>
            <a href="https://github.com/JacekPasierb">
              <FaGithub />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jacek-pasierb">
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
          <div className="skills">
            <div className="headerSkills">
              <h3>Umiejętności</h3>
            </div>
            {skills.map((skill) => {
              return (
                <div key={skill.title}>
                  <h4>{skill.title}:</h4>
                  <ul className="listSkills">
                    {skill.skills.map((item) => (
                      <li key={item}>{item},</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="headerSkills">
              <h3>Języki</h3>
            </div>
            {language.map((lang) => (
              <p key={lang}>{lang}</p>
            ))}
            <div className="headerSkills">
              <h3>Certyfikaty</h3>
            </div>
            {certificates.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="columnRight">
        <div className="columnContainer">
          <p>
            <strong>Jestem Full Stack Developerem </strong> z doświadczeniem w
            projektach indywidualnych i zespołowych. Specjalizuję się w
            tworzeniu aplikacji webowych przy użyciu React, Node.js i MongoDB.
            Zrealizowałem kompleksowe projekty, pracując w zgodzie z metodyką
            Scrum, w tym platformę kulinarną So Yummy. Jestem gotowy na nowe
            wyzwania i rozwój zawodowy.
          </p>
          <div className="headerSkills">
            <h3>Doświadczenie</h3>
          </div>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.company}>
                <div className="cardExperience">
                  <div className="experienceTime">
                    <strong>
                      <p>{experience.time}</p>
                    </strong>
                  </div>
                  <div className="experienceBody">
                    <div className="experienceHeader">
                      <strong>
                        <p>{experience.position}</p> <p>{experience.company}</p>
                      </strong>
                    </div>
                    <ul className="achievList">
                      {experience.achievements.map((achiev) => (
                        <li key={achiev}>
                          <p>{achiev}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="headerSkills">
            <h3>Projekty</h3>
          </div>
          <ul>
            {projects.map((project) => (
              <li key={project.project}>
                <div className="cardExperience">
                  <div className="experienceTime">
                    <strong>
                      <p>{project.time}</p>
                    </strong>
                  </div>
                  <div className="experienceBody">
                    <div className="experienceHeader">
                      <strong>
                        <p>{project.role}</p> <p>{project.project}</p>
                      </strong>
                    </div>
                    <ul className="achievList">
                      {project.achievment.map((achiev) => (
                        <li key={achiev}>
                          <p>{achiev}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="links">
                      {project.GithubBackend && (
                        <a href={project.GithubBackend}>
                          <i> Github Backend</i>
                        </a>
                      )}
                      {project.GithubFrontend && (
                        <a href={project.GithubFrontend}>
                          <i> Github Frontend</i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
       
          <div className="copyright">
            <p>
              Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
              niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z
              dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z
              2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
              sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przepływu takich danych oraz
              uchylenia dyrektywy 95/46/WE (RODO).
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <Header name={data.name} role={data.role} contact={data.contact} />
    <Skills skills={data.skills} />
    <Projects projects={data.projects} /> */}
    <ExportToPDF />
  </div>
);

export default App;
