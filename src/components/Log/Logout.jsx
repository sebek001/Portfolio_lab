import { Link } from "react-router-dom";
import HomeNav from "../Home/HomeNav";

export default function Register() {
  return (
    <>
      <header>
        <HomeNav />
      </header>
      <section className="log">
        <h1 style={{textAlign: 'center'}} className="log__title">Wylogowanie nastąpiło <br/> pomyślnie!</h1>
        <img
          className="header__main-decoration"
          alt="decoration image"
          src="../../../src/assets/Decoration.svg"
        />

        <Link style={{marginTop: '35px', border: '0.75px solid #3C3C3C'}} to="/" className="log__form-buttons-btn">
          Strona główna
        </Link>
      </section>
    </>
  );
}
