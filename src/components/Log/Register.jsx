import { Link } from "react-router-dom";
import HomeNavLog from "../Home/HomeNavLog";
import { useEffect, useState } from "react";

export default function Register() {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordValid2, setPasswordValid2] = useState(true);


  useEffect(() => {
    const emailInput = document.getElementById("log__form-email");
    const passwordInput = document.getElementById("log__form-password");
    const passwordInput2 = document.getElementById("log__form-password2");

    if (!emailValid) {
      emailInput.style.borderBottom = "1px solid red";
    } else {
      emailInput.style.borderBottom = "";
    }

    if (!passwordValid) {
      passwordInput.style.borderBottom = "1px solid red";
    } else {
      passwordInput.style.borderBottom = "";
    }

    if (!passwordValid2) {
      passwordInput2.style.borderBottom = "1px solid red";
    } else {
      passwordInput2.style.borderBottom = "";
    }
  }, [emailValid, passwordValid, passwordValid2]);

  function handleSubmit(e) {
    e.preventDefault();

    const formFields = e.currentTarget.elements;
    const registerData = {
      email: formFields[0].value,
      password: formFields[1].value,
      password2: formFields[2].value,
    };

    const mailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /.{6,}/;

    setEmailValid(mailRegex.test(registerData.email));
    setPasswordValid(passwordRegex.test(registerData.password));

    passwordRegex.test(registerData.password2) && registerData.password2 === registerData.password ? setPasswordValid2(true) : setPasswordValid2(false);


  }



  return (
    <>
      <header>
        <HomeNavLog />
      </header>
      <section className="log">
        <h1 className="log__title">Załóż konto</h1>
        <img
          className="header__main-decoration"
          alt="decoration image"
          src="../../../src/assets/Decoration.svg"
        />
        <form onSubmit={handleSubmit} className="log__form">
          <div className="log__form-inputs">
            <label className="log__form-label" htmlFor="log__form-email">
              Email
            </label>
            <input
              className="log__form-input"
              type="email"
              id="log__form-email"
            />
            {!emailValid && (
              <p className="log__form-input-nonValid">
                Podany email jest nieprawidłowy!
              </p>
            )}
            <label className="log__form-label" htmlFor="log__form-password">
              Hasło
            </label>
            <input
              className="log__form-input"
              type="password"
              id="log__form-password"
            />
            {!passwordValid && (
              <p className="log__form-input-nonValid">
                Podane hasło jest za krótkie!
              </p>
            )}
            <label className="log__form-label" htmlFor="log__form-password2">
              Powtórz hasło
            </label>
            <input
              className="log__form-input"
              type="password"
              id="log__form-password2"
            />
            {!passwordValid2 && (
              <p className="log__form-input-nonValid">
                Podane hasła nie są takie same<br/> lub hasło jest za krótkie!
              </p>
            )}
          </div>
          <div className="log__form-buttons">
            <Link to="/logowanie" className="log__form-buttons-btn">
              Zaloguj się
            </Link>
            <button className="log__form-buttons-btn">Załóż konto</button>
          </div>
        </form>
      </section>
    </>
  );
}
