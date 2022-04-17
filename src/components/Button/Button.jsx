import styled from "styled-components";

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--colors-text);

  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: var(--colors-text);
    color: var(--colors-ui-base);
  }
`;

export default Button;
