import "../styles/layouts/Hello.scss";
const Hello = () => {
  return (
    <section className="hello">
      <div className="hello__txt-container">
        <h1 className="hello__title">
          hello<span className="hello__point"></span>
        </h1>
        <h2 className="hello__static-txt">soy</h2>
        <ul className="hello__dynamic-txt">
          <li>
            <h2>lupe morales</h2>
          </li>
          <li>
            <h2>frontend developer</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Hello;
