import React, { useEffect, useState } from "react";
import Controls from "../components/Controls/Controls";
import List from "../components/List/List";
import Card from "../components/Card/Card";
import axios from "axios";
import { _ALL_COUNTRIES } from "../configAPI";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const MainPage = ({ setCountries, countries }) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);
  const [loading, setLoading] = useState(null);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredCountries(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      setLoading(true);
      axios
        .get(_ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data);
        })
        .finally(() => setLoading(false));
    }
  }, [countries]);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Controls onSearch={handleSearch} />
          <List>
            {filtredCountries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name.common,
                info: [
                  {
                    title: "Population",
                    description: c.population.toLocaleString("ru"),
                  },
                  {
                    title: "Region",
                    description: c.region,
                  },
                  {
                    title: "Capital",
                    description: c.capital,
                  },
                ],
              };
              return (
                <Card
                  key={c.name.common}
                  onClick={() => navigate(`country/${c.name.common}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
        </>
      )}
    </>
  );
};

export default MainPage;
