import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaVars } from "../mediaVars";
import axios from "axios";
import { filterByCode } from "../../configAPI";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${mediaVars.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: ${mediaVars.lg}) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: ${mediaVars.md}) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const Info = (props) => {
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const getCurrencyValue = (arr) => {
    for (const key in arr) {
      const value = arr[key].name;
      return <span key={value}>{value} </span>;
    }
  };

  const getLanguageValue = (arr) => {
    if (arr) {
      for (const arrKey in arr) {
        return <span>{arr[arrKey]}</span>;
      }
    }
  };

  const [neighbors, setNeighbors] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(filterByCode(borders)).then(({ data }) => {
      setNeighbors(data.map((c) => c.name.common));
    });
  }, [borders]);
  return (
    <Wrapper>
      <InfoImg src={flags.png} alt={name.common} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native name:</b> {name.official}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population.toLocaleString("ru")}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Currency</b>: {getCurrencyValue(currencies)}
            </ListItem>
            <ListItem>
              <b>Languages</b>: {getLanguageValue(languages)}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Borders</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors
                ? neighbors.map((n) => (
                    <Tag
                      onClick={() => {
                        navigate(`../country/${n}`, {
                          replace: true,
                        });
                      }}
                      key={n}
                    >
                      {n}
                    </Tag>
                  ))
                : null}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
