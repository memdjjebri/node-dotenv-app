import { Divider } from "antd";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import { experience, projects } from "./data/data";
import AsideComp from "./components/AsideComp";

function App() {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <div className="body-container">
          <div className="left">
            <section className="about">
              <article>
                <h2>A propos de moi</h2>
                <p>
                  Un développeur web junior en formation, passionné du web et
                  des technologies numériques, motivé à acquérir les compétences
                  nécessaires pour concevoir, développer et maintenir des sites
                  web et des applications. Actuellement en phase
                  d'apprentissage, je me familiarise avec les langages de base
                  tels que HTML, CSS et Javascript. Mon apprentissage est
                  soutenu par ma capacité à apprendre rapidement, mon esprit
                  d'équipe et ma motivation à rester à jour avec les dernières
                  tendances
                </p>
              </article>
            </section>
            <section className="projects">
              <h2>Mes recents projets</h2>
              <article>
                <img
                  className="featured-img"
                  src="https://media.istockphoto.com/id/1448124439/fr/vectoriel/concept-dinterface-utilisateur-de-d%C3%A9veloppement-de-programmation-et-de-test-de-code-web.jpg?s=612x612&w=0&k=20&c=IUMrCe0cTS2WQIxv_kEvb6bpezwZkJZnJfbuRO_SYIc="
                  alt="slug"
                />
                <div className="project-info">
                  <h1>
                    Lien :
                    <a
                      class="custom-link"
                      href="https://moonlow31.github.io/Projet-Chrono/"
                    >
                      Frise chronologique
                    </a>
                  </h1>

                  <p>
                    Retrace les événements clés de l'histoire via une frise
                    interactive.
                  </p>
                  <h1>
                    {" "}
                    Lien :
                    <a
                      class="custom-link"
                      href="https://moonlow31.github.io/Projet-Chrono/"
                    >
                      Portfolio
                    </a>
                  </h1>
                  <p>
                    Met en avant parcours, compétences et projets avec une
                    expérience fluide.
                  </p>
                  <h1>
                    {" "}
                    Lien :
                    <a
                      class="custom-link"
                      href="https://globe-guide.netlify.app/"
                    >
                      Globe Guide
                    </a>
                  </h1>
                  <p>
                    Aide à découvrir et planifier des voyages avec une interface
                    conviviale.
                  </p>
                  <div className="project-link"></div>
                </div>
              </article>
              <Divider style={{ backgroundColor: "#fff" }} />
              {projects.map((item, index) => {
                return (
                  <article className="article-item" key={index}>
                    <div className="left">
                      <img src={item.image} alt="project-slug" />
                    </div>
                    <div className="right">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="experiences">
              <h2>Experience professionnelle</h2>
              {experience.map((item) => {
                return (
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </section>
          </div>
          <AsideComp />
        </div>
        <FooterComp />
      </div>
    </>
  );
}

export default App;
