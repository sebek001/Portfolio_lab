import { Link } from "react-router-dom";
import HomeNav from "../Home/HomeNav";

export default function Login() {
  return (
    <>
      <header>
        <HomeNav />
      </header>
      <section className="log">
        <h1 className="log__title">Zaloguj się</h1>
        <img
          className="header__main-decoration"
          alt="decoration image"
          src="../../../src/assets/Decoration.svg"
        />
        <form className="log__form">
          <div className="log__form-inputs"><label className="log__form-label" htmlFor="log__form-email">
            Email
          </label>
          <input className="log__form-input" type="email" id="log__form-email" />
          <label className="log__form-label" htmlFor="log__form-password">
            Hasło
          </label>
          <input className="log__form-input" type="password" id="log__form-password" /></div>
          <div className="log__form-buttons">
            <Link to="/rejestracja" className="log__form-buttons-btn">
              Załóż konto
            </Link>
            <button className="log__form-buttons-btn">Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
}
