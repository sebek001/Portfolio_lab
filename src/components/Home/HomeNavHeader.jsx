import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";

export default function HomeNavHeader() {
  return (
    <header id="start" className="header header__container">
      <section className="header__left"></section>
      <section className="header__right">
        <HomeNav />
      </section>
      <section className="header__main">
        <h1 className="header__main-title">
          Zacznij pomagać!
          <br /> Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img
          className="header__main-decoration"
          alt="decoration image"
          src="../../../src/assets/Decoration.svg"
        />
        <div className="header__main-buttons">
          <Link to="/logowanie" className="header__main-buttons-el">
            ODDAJ <br /> RZECZY
          </Link>
          <Link to="/logowanie" className="header__main-buttons-el">
            ZORGANIZUJ <br /> ZBIÓRKĘ
          </Link>
        </div>
      </section>
    </header>
  );
}
