import styled from "styled-components";
import Loader from "react-loader-spinner";

export const StyleLoader = styled(Loader)`
  text-align: center;
`;

export const StyleCountdownCircleTimer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 65vw;
`;

export const QuestionImageDiv = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 28vh;
  margin: 1rem 0;
`;

export const OptionsAnswerDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
