import { Link } from "react-router-dom";

export default function HomeSimpleSteps() {
  const steps = [
    { title: "Wybierz rzeczy", desc: <>ubrania, zabawki,<br/> sprzęt i inne</> },
    { title: "Spakuj je", desc: <>skorzystaj z <br/>worków na śmieci</> },
    { title: <>Zdecyduj komu<br />
    chcesz pomóc</>, desc: <>wybierz zaufane <br/>miejsce</> },
    {
      title: "Zamów kuriera",
      desc: <>
      kurier przyjedzie
      <br />
      w dogodnym terminie
    </>,
    },
  ];
  return (
    <section className="simpleSteps" id="o_co_chodzi">
      <h2 className="simpleSteps__title">Wystarczą 4 proste kroki</h2>
      <img
        className="header__main-decoration"
        alt="decoration image"
        src="../../../src/assets/Decoration.svg"
      />
      <div className="simpleSteps__elements">
        {steps.map((step, index) => (
          <div className="simpleSteps__elements-step" key={index}>
            <img
              className="simpleSteps__elements-step-img"
              alt="step-img"
              src={`../../../src/assets/Icon-${index + 1}.svg`}
            />
            <h3 className="simpleSteps__elements-step-title">{step.title}</h3>
            <p className="simpleSteps__elements-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
      <Link to="/logowanie" className="header__main-buttons-el">
            ODDAJ <br /> RZECZY
          </Link>
    </section>
  );
}
