import React from "react";

function About() {
  return (
    <div className="container">
      <header className="header">
        <img src="src\assets\Logo.png" alt="" className="logo" />
        <h1>Globe Guide</h1>
        <h2 className="section-title">The team behind Glob guide</h2>
        <p className="section-subtitle">Travel far enough, you meet yourself</p>
      </header>
      <div className="team-section">
        {/* Section sur l'équipe 1 */}
        <div className="team-item">
          <img
            src="https://media.discordapp.net/attachments/1225461642146349148/1230103276947640380/IMG_4572.jpeg?ex=663219f3&is=661fa4f3&hm=e116bc9dd3e647dce93a1b81b308d8de7e50de96c1d4a0c036bc018f5a6d0a7c&=&format=webp&width=467&height=623"
            className="team-img"
            alt="pic"
          />
          <h3>Fanny Pretre</h3>
          <div className="team-info">
            <p>Dragon Crew</p>
            <p>
              Une aspirante développeuse en formation à la Wild Code School, se
              plonge avec passion dans le monde du codage. Dotée d'une curiosité
              sans limite et d'une détermination inébranlable, elle explore les
              différentes facettes du développement web avec enthousiasme.
              Toujours avide de nouveaux défis, ell incarne l'esprit de
              persévérance et d'apprentissage continu, prête à repousser les
              limites pour atteindre l'excellence dans son domaine.
            </p>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/fanny-pr%C3%AAtre-723630114/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://github.com/fanny-pretre" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:fanny.pretre@gmail.com" target="blank">
                  <i className="fas fa-envelope"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* Section sur l'équipe 2*/}
        <div className="team-item">
          <img
            src="https://media.discordapp.net/attachments/1225461642146349148/1230128098226343986/20240101_182010.jpg?ex=66323111&is=661fbc11&hm=a6088bbe7cbefd8e984336e6bd2dceb244e7bc5349357c2ddfd238daee268026&=&format=webp&width=467&height=623"
            className="team-img"
            alt="pic"
          />
          <h3>Jebri Mohamed</h3>
          <div className="team-info">
            <p>Dragon Crew</p>
            <p>
              Développeur junior en formation à la Wild Code School. Passionné
              par la programmation et le développement web, il se perfectionne
              dans divers langages et technologies pour construire des
              applications innovantes. Avec une solide formation et une volonté
              d'apprendre constante, il est prêt à relever de nouveaux défis et
              à contribuer à des projets prometteurs dans le domaine de la
              technologie.
            </p>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-jebri-3a11047b/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://github.com/memdjjebri" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:memedjjebri@gmail.com" target="blank">
                  <i className="fas fa-envelope"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* Section sur l'équipe 3 */}
        <div className="team-item">
          <img
            src="https://media.discordapp.net/attachments/1225461642146349148/1230102505564934144/Laurent.jpg?ex=6632193b&is=661fa43b&hm=8fda35696a47ee41a295e63096b64cc63d9bfd47c99245fd0b3863cfa7242412&=&format=webp&width=467&height=623"
            className="team-img"
            alt="pic"
          />
          <h3>Laurent Baudin</h3>
          <div className="team-info">
            <p>Dragon Crew</p>
            <p>
              Apprenti développeur en devenir à la Wild Code School, navigue
              avec enthousiasme dans l'univers du développement web. Guidé par
              sa curiosité insatiable et sa détermination à maîtriser les
              technologies émergentes, il explore les subtilités du code pour
              créer des solutions numériques innovantes. Sa soif d'apprendre et
              son engagement en font un élément prometteur pour tout projet
              nécessitant créativité et expertise technique.
            </p>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/laurent-bauduin-868601250/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://github.com/Laurent-Bauduin" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:laurent.bauduin0@gmail.com" target="blank">
                  <i className="fas fa-envelope"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* Section sur l'équipe 4*/}
        <div className="team-item">
          <img
            src="https://media.discordapp.net/attachments/1225461642146349148/1230128351318904872/IMG20211217141256.jpg?ex=6632314d&is=661fbc4d&hm=82c36039bd9755760a5893b36274e21cc9c758f7aca477af8a4c9949576abb79&=&format=webp&width=467&height=623"
            className="team-img"
            alt="pic"
          />
          <h3>Simon Besheron</h3>
          <div className="team-info">
            <p>Dragon Crew</p>
            <p>
              Un aspirant développeur chez Wild Code School, se lance avec
              passion dans le monde complexe mais stimulant du développement
              informatique. Doté d'une détermination sans faille et d'une soif
              insatiable de connaissances, il embrasse chaque défi comme une
              opportunité d'apprentissage et de croissance. Toujours prêt à
              explorer de nouvelles idées et à repousser ses limites, il incarne
              l'esprit de découverte et d'innovation qui caractérise les
              développeurs les plus prometteurs.
            </p>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/simon-bescheron/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://github.com/simonbesch" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:simonbescheron@gmail.com" target="blank">
                  <i className="fas fa-envelope"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* Section sur l'équipe 5*/}
        <div className="team-item">
          <img
            src="https://media.discordapp.net/attachments/1225461642146349148/1230102317517508629/Inspiration_point__.jpg?ex=6632190e&is=661fa40e&hm=a255ad031743fe50c1d89391bcc1fe53259962450ed79844d7e6377c9ec78405&=&format=webp&width=623&height=623"
            className="team-img"
            alt="pic"
          />
          <h3>Baptiste Cazenave </h3>
          <div className="team-info">
            <p>Dragon Crew</p>
            <p>
              Un talent émergent de la Wild Code School, jongle avec
              enthousiasme entre les lignes de code pour construire son chemin
              vers l'excellence dans le monde du développement. Armé d'une
              passion inébranlable pour la technologie et d'une détermination
              sans bornes, il se forge une expertise à travers des projets
              stimulants et une formation intensive.Il incarne l'esprit
              aventureux et la curiosité insatiable qui propulsent les
              innovateurs vers de nouveaux horizons.
            </p>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/baptiste-cazenave-9384b3209/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://github.com/baptistesss" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:baptistecaz98@gmail.com" target="blank">
                  <i className="fas fa-envelope"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* Section sur l'équipe 6 */}
        <div className="team-item">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/14/10/13/project-3318662_640.png"
            alt=""
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Travel far enough, you meet yourself</p>
          <p1>Copyright © 2024 Wild Code School (F.M.S.L.B)</p1>
          <img src="src\assets\Logo.png" alt="" className="logo" />
        </div>
      </footer>
    </div>
  );
}

export default About;
