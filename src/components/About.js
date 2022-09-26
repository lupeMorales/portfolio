import "../styles/layouts/About.scss";
const About = () => {
  return (
    <>
      <section className="about">
        <section className="about__hero">
          <div className="line"></div>
          <h2 className="about__title section__title"> mi bio</h2>
          <p className="about__text--strong">
            <em>"Que es la vida sino continuo aprendizaje".</em>
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
          {/*   <img src={} alt="" className="about__image"></img> */}
        </section>
        <section className="about__skills">
          <h3 className="skills__title">Skills</h3>
          <p className="skills__line">
            <span className="skills__tag">HTML5</span>
            <span className="skills__tag">CSS3</span>
            <span className="skills__tag">Sass</span>
            <span className="skills__tag">Flexbox</span>
            <span className="skills__tag">Grid</span>
            <span className="skills__tag">Animaciones</span>
          </p>
          <p className="skills__line">
            <span className="skills__tag">JavaScript</span>
            <span className="skills__tag">Java</span>
            <span className="skills__tag">React</span>
            <span className="skills__tag">APIs</span>
          </p>
          <p className="skills__line">
            <span className="skills__tag">Node-JS</span>
            <span className="skills__tag">Express</span>
            <span className="skills__tag">SQL (SQLite)</span>
          </p>
          <p className="skills__line">
            <span className="skills__tag">Git (GitHub)</span>
          </p>
          <p className="skills__line">
            <span className="skills__tag">VS Code</span>
            <span className="skills__tag">Gulp</span>
            <span className="skills__tag">NPM</span>
          </p>
          <p className="skills__line">
            <span className="skills__tag">Agile</span>
            <span className="skills__tag">Scrum</span>
          </p>
        </section>
      </section>
    </>
  );
};
export default About;
