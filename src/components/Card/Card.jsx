import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  align-self: center;
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  box-shadow: var(--shadow);
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;
const CardTitle = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
`;
const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;
const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((e) => {
            return (
              <CardListItem key={e.title}>
                <b>{e.title}:</b> {e.description}
              </CardListItem>
            );
          })}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
