import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { getTriviaTitleImage } from "../../helpers/getTriviaTitleImage";
import * as S from "./styles";

const Home = () => {
  const { title, image } = getTriviaTitleImage();

  return (
    <S.DivHome backgroundImage={image}>
      <S.Title>{title}</S.Title>
      <Link to="/playTrivia">
        <Button>Play Now !</Button>
      </Link>
    </S.DivHome>
  );
};

export default Home;
