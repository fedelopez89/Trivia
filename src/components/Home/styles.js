import styled from "styled-components";

export const Title = styled.h1`
  font-family: fantasy;
  line-height: 0px;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
`;

export const DivHome = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70vh;
`;
