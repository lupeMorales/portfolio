import "../styles/layouts/Hello.scss";
const Hello = () => {
  return (
    <section className="hello">
      <p className="hello__lupe">lupe morales</p>
      <div className="hello__txt-container">
        <h1 className="hello__title">hello</h1>

        <h2 className="hello__static-txt">
          soy frontend <span className="hello__point"></span>
        </h2>
      </div>
    </section>
  );
};
export default Hello;
