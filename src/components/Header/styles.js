import styled from "styled-components";

export const DivHeader = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-position: center;
`;

export const HeaderH1 = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 5rem;
  text-transform: uppercase;
`;
