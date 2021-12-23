import React from "react";
import * as S from "./styles";

const Header = (props) => {
  return (
    <S.DivHeader backgroundImage={props.backgroundImage}>
      <S.HeaderH1>{props.title}</S.HeaderH1>
    </S.DivHeader>
  );
};

export default Header;
