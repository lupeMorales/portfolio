import "../styles/layouts/About.scss";
import imgProfile from "../images/lupe.jpg";
const About = (props) => {
  return (
    <>
      <section className={`about ${props.menuHidden}`}>
        <section className="section__hero">
          <div className="section__line"></div>
          <h2 className="section__title "> mi bio</h2>
          <p className="section__text--strong">
            <em>"Qué es la vida sino continuo aprendizaje".</em>
          </p>
        </section>
        <section className="about__bio">
          <p className="about__text">
            mi curiosidad innata me hace preguntarme siempre ¿qué hay detrás?
            ¿cómo se hace? ¿podría hacerlo yo? Y eso me llevó casi sin quererlo
            al mundo de la programación aunque nunca imaginé que pudiese
            atraparme como lo hizo, tanto, que tras años dedicada al sector del
            turismo he decidido dar un giro profesional a mi carrera lanzándome
            con ilusión y determinación a esta aventura.
          </p>
          <img
            src={imgProfile}
            alt="Lupe Morales "
            className="about__image"
          ></img>
        </section>
        <section className="skills">
          <h3 className="skills__title">Skills</h3>
          <p className="skills__line">HTML5 CSS3 Sass Flexbox Animaciones</p>
          <p className="skills__line">JavaScript Java React APIs</p>
          <p className="skills__line">Node-JS Express SQL</p>
          <p className="skills__line">Git GitHub</p>
          <p className="skills__line">VS Code Gulp NPM</p>
          <p className="skills__line">Agile Scrum</p>
        </section>
      </section>
    </>
  );
};
export default About;
