export default function HomeContact() {
  return (
    <>
      <section className="contact" id="kontakt">
        <div className="contact__right">
          <h2 className="contact__title">Skontaktuj się z nami</h2>
          <img
            className="header__main-decoration"
            alt="decoration image"
            src="../../../src/assets/Decoration.svg"
          />
          <form className="contact__form">
            <div className="contact__form-upper">
            <div className="contact__form-name">
              <label className="contact__form-label" htmlFor="form_name">Wpisz swoje imię</label>
              <input className="contact__form-element" id="form_name" placeholder="Krzysztof" />
            </div>
            <div className="contact__form-email">
              <label className="contact__form-label" htmlFor="form_email">Wpisz swój email</label>
              <input className="contact__form-element" type="email" id="form_email" placeholder="abc@xyz.com" />
            </div></div>
            <div className="contact__form-text">
              <label className="contact__form-label" htmlFor="form_text">Wpisz swoją wiadomość</label>
              <input className="contact__form-element contact__form-element-text"
                id="form_text"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <button className="contact__form-btn">Wyślij</button>
          </form>
        </div>
        <footer className="footer">
        <p className="footer_text">Copyright by Coders Lab</p>
        <div className="footer__socials">
          <a href="">
            <img
              className="footer__socials-icon"
              alt="facebook logo"
              src="../../../src/assets/Facebook.svg"
            />
          </a>
          <a href="">
            <img
              className="footer__socials-icon"
              alt="instagram logo"
              src="../../../src/assets/Instagram.svg"
            />
          </a>
        </div>
      </footer>
      </section>
      
    </>
  );
}
