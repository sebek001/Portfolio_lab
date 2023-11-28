import { Link } from "react-router-dom";
import HomeNavLog from "../Home/HomeNavLog";
import { useState, useEffect } from "react";

export default function Login() {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    const emailInput = document.getElementById("log__form-email");
    const passwordInput = document.getElementById("log__form-password");

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
  }, [emailValid, passwordValid]);

  
  function handleSubmit(e) {
    e.preventDefault();

    const formFields = e.currentTarget.elements;
    const loginData = {
      email: formFields[0].value,
      password: formFields[1].value,
    };

    const mailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /.{6,}/;

    setEmailValid(mailRegex.test(loginData.email));
    setPasswordValid(passwordRegex.test(loginData.password));

    
  }


  return (
    <>
      <header>
        <HomeNavLog />
      </header>
      <section className="log">
        <h1 className="log__title">Zaloguj się</h1>
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
          </div>
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
