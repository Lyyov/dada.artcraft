import "./footer.scss";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer__col">
            <p className="footer__logo">
              dada
              <br />
              art.craft
            </p>
          </div>
          <div className="col-md-3 footer__col">
            <div className="footer__title">about</div>
            <ul>
              {/* <li><a className="footer__link" href="#">Our Services</a></li> */}
              <li>
                <a className="footer__link" href="#">
                  Our Team
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer__col">
            <div className="footer__title">services</div>
            <ul>
              <li>
                <a className="footer__link" href="/projects">
                  Branding
                </a>
              </li>
              {/* <li><a className="footer__link" href="#">Web Design</a></li> */}
              {/* <li><a className="footer__link" href="#">Social Media</a></li> */}
            </ul>
          </div>
          <div className="col-md-3 footer__col">
            <div className="footer__title">Contacts</div>
            <ul>
              <li>
                <a className="footer__link" href="tel:+37367200165">
                  +373 67 200 165
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="mailto:dada.artcraft@gmail.com"
                >
                  dada.artcraft@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
