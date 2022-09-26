import "../styles/layouts/About.scss";
const About = () => {
  return (
    <>
      <section className="about">
        <section className="about__hero">
          <div className="line"></div>
          <h2 className="about__title section__title">
            sobre m<span>i</span>
          </h2>
          <p className="about__text--strong">
            {" "}
            soy inquieta, perfecionista y curiosa...
          </p>
        </section>
        <section className="about__bio">
          <p className="about__text">
            y esa curiosidad me lle a preguntarme siempre ¿¿qué hay detrás??
            ¿¿cómo se hace?? ¿¿podría hacerlo yo? Eso me llevo casi sin quererlo
            al mundo de la programación aunque nunca imaginé que pudiese
            atraparme como lo hizo tanto que tras años dedicada al sector del
            turismo he decidido dat un giro profesional a mi carrera lanzándome
            con ilusión y determinación a esta aventura.
            <span>Al fin y al cabo que es la vida sino cambio continuo</span>
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
