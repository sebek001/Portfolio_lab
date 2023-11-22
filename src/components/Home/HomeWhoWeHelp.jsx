import { useState, useEffect } from "react";
import supabase from "../../services/supabase";

export default function HomeWhoWeHelp() {
  const [selectedItem, setSelectedItem] = useState("Fundacjom");
  const [selectedKey, setSelectedKey] = useState("fundations");
  const items = [
    { fundations: "Fundacjom" },
    { organizations: "Organizacjom pozarządowym" },
    { locals: "Lokalnym zbiórkom" },
  ];
  const [data, setData] = useState({
    fundations: {
      desc: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
      items: [],
    },
    organizations: {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      items: [],
    },
    locals: {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      items: [],
    },
  });

  useEffect(() => {
    items.map((item) => getData(item));
  }, []);

  async function getData(type) {
    let { data, error } = await supabase
      .from("data")
      .select("*")
      .eq("type", type);

    if (!error) {
      setData((prev) => ({
        ...prev,
        [type]: { ...prev[type], items: data },
      }));
    } else {
      console.error("Something went wrong", error.message);
    }
  }

  function selectItem(value, key) {
    setSelectedItem(value);
    setSelectedKey(key);
  }

  return (
    <section className="whoWeHelp">
      <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
      <img
        className="header__main-decoration"
        alt="decoration image"
        src="../../../src/assets/Decoration.svg"
      />
      <div className="whoWeHelp__selection">
        {items.map((item) => (
          <p
            key={Object.values(item)[0]}
            onClick={() =>
              selectItem(Object.values(item)[0], Object.keys(item)[0])
            }
            className="whoWeHelp__selection-item"
          >
            {Object.values(item)[0]}
          </p>
        ))}
        <div className='whoWeHelp__data'>
          {selectedItem && selectedKey && (
            <div className="whoWeHelp__data-description">{data[selectedKey].desc}</div>
          )}
          {/* mapa organizacji */}
        </div>
      </div>
    </section>
  );
}
