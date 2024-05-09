import ContactForm from "./_components/ContactForm";
import BaseLinkButton from "../_components/Buttons/BaseButton";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3 className="contact__title title">Let’s Talk</h3>
        <div className="row contact__row">
          <div className="col-lg-5 col-md-6 col-12">
            <h5 className="contact__subtitle subtitle">
              How can we assist you?
            </h5>
            <p className="contact__text">
              Tell us more about your project or just say hello.
            </p>
            <ContactForm />
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <h5 className="contact__subtitle right">You can find us at:</h5>
            <p className="contact__text">
              Our motivation helps to craft meaningful experiences for the
              people around us, this mission inspires us each day and guides
              every aspect of what we do.
            </p>
            <p className="contact__address">
              <span>REPUBLICA MOLDOVA</span>
              <br />
              Chișinău, Roguleni 6.
            </p>
            <div className="contact__phone">
              <span>Tel</span>
              <span>
                <a href="tel:+37367200165">(373) 67-200-165</a> <br />
              </span>
            </div>
            <div className="contact__email">
              <span>Email</span> <br />
              <a href="mailto:dada.artcraft@gmail.com">
                dada.artcraft@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <BaseLinkButton text="Complete the Brief" href="/contacts/brief" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
