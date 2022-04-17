import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { mediaVars } from "../mediaVars";

const InputContainer = styled.label`
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);

  padding: 1rem 1.4rem;
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country ...",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--colors-text);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch style={{ flexShrink: "0" }} />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
