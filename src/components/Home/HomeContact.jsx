import { useState, useRef, useEffect } from "react";

export default function HomeContact() {
  const [nameValidation, setNameValidation] = useState(null);
  const [mailValidation, setMailValidation] = useState(null);
  const [msgValidation, setMsgValidation] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    // Sprawdzanie walidacji imienia
    if (nameValidation === "nie") {
      document.getElementById("form_name").style.borderBottom = "1px solid red";
    } else {
      document.getElementById("form_name").style.borderBottom = "";
    }
    

    // Sprawdzanie walidacji emaila
    if (mailValidation === "nie") {
      document.getElementById("form_email").style.borderBottom = "1px solid red";
    } else {
      document.getElementById("form_email").style.borderBottom = "";
    }

    // Sprawdzanie walidacji wiadomości
    if (msgValidation === "nie") {
      document.getElementById("form_text").style.borderBottom = "1px solid red";
    } else {
      document.getElementById("form_text").style.borderBottom = "";
    }
  }, [nameValidation, mailValidation, msgValidation]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formFields = e.currentTarget.elements;
    const message = {
      name: formFields[0].value,
      email: formFields[1].value,
      message: formFields[2].value,
    };

    try {
      const nameRegex = /^\s*\S+\s*$/;
      const mailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const msgRegex = /^.{120,}$/;

      const isNameValid = nameRegex.test(message.name);
      const isMailValid = mailRegex.test(message.email);
      const isMsgValid = msgRegex.test(message.message);

      setNameValidation(isNameValid ? "ok" : "nie");
      setMailValidation(isMailValid ? "ok" : "nie");
      setMsgValidation(isMsgValid ? "ok" : "nie");

      // Wysyłanie wiadomości
      if (isNameValid && isMailValid && isMsgValid) {
        const response = await fetch(
          "https://fer-api.coderslab.pl/v1/portfolio/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Sprawdzanie odpowiedzi z serwera
          if (data.status === "success") {
            // Obsługa sukcesu
            console.log("Wiadomość została wysłana!", data);
            formRef.current.reset();
            // Dodaj kod obsługi pozytywnej odpowiedzi od serwera
          } else if (data.errors) {
            // Obsługa błędów walidacji
            console.error("Błędy walidacji:", data.errors);
            // Dodaj kod obsługi błędów walidacji
          } else {
            // Obsługa innych błędów
            console.error("Nieznany błąd:", data);
            // Dodaj kod obsługi innych błędów
          }
        } else {
          // Obsługa błędów HTTP
          console.error("Błąd HTTP:", response.status);
        }
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  }

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
          {nameValidation === "ok" &&
            mailValidation === "ok" &&
            msgValidation === "ok" && (
              <p className="msgSuccess">
                Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy
              </p>
            )}
          <form onSubmit={handleSubmit} ref={formRef} className="contact__form">
            <div className="contact__form-upper">
              <div className="contact__form-name">
                <label className="contact__form-label" htmlFor="form_name">
                  Wpisz swoje imię
                </label>
                <input
                  className="contact__form-element"
                  id="form_name"
                  placeholder="Krzysztof"
                />
                {nameValidation === "nie" && (
                  <p className="false__validation">
                    Podane imię jest nieprawidłowe!
                  </p>
                )}
              </div>
              <div className="contact__form-email">
                <label className="contact__form-label" htmlFor="form_email">
                  Wpisz swój email
                </label>
                <input
                  className="contact__form-element"
                  type="email"
                  id="form_email"
                  placeholder="abc@xyz.com"
                />
                {mailValidation === "nie" && (
                  <p className="false__validation">
                    Podany email jest nieprawidłowy!
                  </p>
                )}
              </div>
            </div>
            <div className="contact__form-text">
              <label className="contact__form-label" htmlFor="form_text">
                Wpisz swoją wiadomość
              </label>
              <input
                className="contact__form-element contact__form-element-text"
                id="form_text"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              {msgValidation === "nie" && (
                <p className="false__validation">
                  Wiadomość musi mieć co najmniej 120 znaków!
                </p>
              )}
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
