import React, { useEffect, useState } from "react";
import Search from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";
import { mediaVars } from "../mediaVars";

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Oceania",
    label: "Oceania",
  },
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: ${mediaVars.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    //eslint-disable-next-line
  }, [search, region]);

  return (
    <>
      <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder="Filter by region"
          isClearable
          isSearchable={false}
          value={region}
          onChange={setRegion}
        />
      </Wrapper>
    </>
  );
};

export default Controls;
