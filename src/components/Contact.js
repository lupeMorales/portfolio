import "../styles/layouts/Contact.scss";
import NavContact from "./NavContact";

const Contact = () => {
  return (
    <section className="contact animate__animated animate__fadeInRight">
      <section className="contact__hero">
        <div className="contact__line"></div>
        <h2 className="contact__title  ">contacto</h2>
        <div className="contact__container">
          {" "}
          <a
            className="contact__text"
            href="mailto:morales.lupe@gmail.com"
            title="email"
          >
            <em>morales.lupe@gmail.com</em> <NavContact />
          </a>
        </div>
      </section>
    </section>
  );
};
export default Contact;
