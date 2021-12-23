import React from "react";
import * as S from "./styles";

const Button = (props) => {
  return (
    <S.Button
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </S.Button>
  );
};

export default Button;
