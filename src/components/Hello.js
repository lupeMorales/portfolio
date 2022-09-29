import "../styles/layouts/Hello.scss";
const Hello = (props) => {
  return (
    <section className={`hello ${props.menuHidden}`}>
      <p className="hello__dynamic-text">front-end developer</p>
      <div className="hello__txt-container">
        <h1 className="hello__title">
          hola<span className="hello__exclamation">!</span>
        </h1>

        <h2 className="hello__subtitle">soy Lupe Morales</h2>
      </div>
    </section>
  );
};
export default Hello;
