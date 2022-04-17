import React from "react";
import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radius)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
      transition: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-ui-base)"
        : "var(--colors-bg)",
    }),
    transition: "none",
  },
})`
  width: 100%;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-bg);
  }
`;
