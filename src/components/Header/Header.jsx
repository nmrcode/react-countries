import styled from "styled-components";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  user-select: none;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);

  cursor: pointer;
`;

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("currentTheme"));

  const toggleTheme = () => {
    localStorage.setItem("currentTheme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    }
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>nmrcode / react-countries</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <MdDarkMode size="21px" />
            ) : (
              <MdOutlineDarkMode size="21px" />
            )}
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
