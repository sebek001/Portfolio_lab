import { useState, useEffect } from "react";
import supabase from "../../services/supabase";

export default function HomeWhoWeHelp() {
  const [selectedItem, setSelectedItem] = useState("Fundacjom");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("fundations");
  const items = [
    { fundations: "Fundacjom" },
    { organizations: "Organizacjom pozarządowym" },
    { locals: "Lokalnym zbiórkom" },
  ];
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const texts = {
    fundations: {
      desc: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    },
    organizations: {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    locals: {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(selectedKey);
  }, [selectedKey]);

  async function getData(type) {
    setLoading(true);
    let { data, error } = await supabase
      .from("data")
      .select("*")
      .eq("type", type);

    setLoading(false);

    if (!error) {
      setData(data);
    } else {
      console.error("Something went wrong", error.message);
    }
  }


  function selectItem(value, key, index) {
    setSelectedItem(value);
    setSelectedKey(key);
    setCurrentPage(1);
    setSelectedItemIndex(index);
  }


  return (
    <section className="whoWeHelp" id='fundacje'>
      <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
      <img
        className="header__main-decoration"
        alt="decoration image"
        src="../../../src/assets/Decoration.svg"
      />
      <div className="whoWeHelp__selection">
  {items.map((item, index) => (
    <p
      key={Object.values(item)[0]}
      onClick={() =>
        selectItem(Object.values(item)[0], Object.keys(item)[0], index)
      }
      className={`whoWeHelp__selection-item ${
        selectedItemIndex === index ? "selected" : ""
      }`}
    >
      {Object.values(item)[0]}
    </p>
  ))}
</div>
      <div className="whoWeHelp__data">
        {loading && <p>Ładowanie danych...</p>}
        {selectedItem && selectedKey && !loading && (
          <div className="whoWeHelp__data-description">
            {texts[selectedKey].desc}
          </div>
        )}
        {selectedItem &&
          selectedKey &&
          !loading &&
          data
            .sort((a, b) => a.id - b.id)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((org, index) => (
              <div key={org.id} className="whoWeHelp__data-organizations">
                <div className="whoWeHelp__data-organizations-left">
                  <div className="whoWeHelp__data-organizations-name">
                    {org.name}
                  </div>
                  <div className="whoWeHelp__data-organizations-goals">
                    {org.goals}
                  </div>
                </div>
                <div className="whoWeHelp__data-organizations-needs">
                  {org.needs}
                </div>
              </div>
            ))}
        {!loading && selectedItem && selectedKey && data.length === 0 && (
          <p>Brak dostępnych danych.</p>
        )}
      </div>
      {!loading &&
        selectedItem &&
        selectedKey &&
        data.length > itemsPerPage && (
          <div className="pagination">
            {Array.from({
              length: Math.ceil(data.length / itemsPerPage),
            }).map((_, index) => (
              <button
                className="pagination__button"
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
    </section>
  );
}
