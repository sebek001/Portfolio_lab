import { Link } from "react-router-dom";

export default function HomeNavLog() {
    return(
        <nav className="header__nav">
        <div className="header__upperMenu">
          <Link to="/logowanie" className="header__upperMenu-element">
            Zaloguj
          </Link>
          <Link to="/rejestracja" className="header__upperMenu-element">
            Załóż konto
          </Link>
        </div>
        <div className="header__lowerMenu">
          <Link
            to="/#start"
            className="header__lowerMenu-element"
          >
            Start
          </Link>
          <Link
            to="/#o_co_chodzi"
            className="header__lowerMenu-element"
          >
            O co chodzi?
          </Link>
          <Link
            to="/#o_nas"
            className="header__lowerMenu-element"
          >
            O nas
          </Link>
          <Link
            to="/#fundacje"
            className="header__lowerMenu-element"
          >
            Fundacja i organizacje
          </Link>
          <Link
            to="/#kontakt"
            className="header__lowerMenu-element"
          >
            Kontakt
          </Link>
        </div>
      </nav> 
    )
}