import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function HomeNav() {
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
          <ScrollLink
            to="start"
            smooth={true}
            duration={500}
            className="header__lowerMenu-element"
          >
            Start
          </ScrollLink>
          <ScrollLink
            to="o_co_chodzi"
            smooth={true}
            duration={500}
            className="header__lowerMenu-element"
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            to="o_nas"
            smooth={true}
            duration={500}
            className="header__lowerMenu-element"
          >
            O nas
          </ScrollLink>
          <ScrollLink
            to="fundacje"
            smooth={true}
            duration={500}
            className="header__lowerMenu-element"
          >
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
            to="kontakt"
            smooth={true}
            duration={500}
            className="header__lowerMenu-element"
          >
            Kontakt
          </ScrollLink>
        </div>
      </nav> 
    )
}