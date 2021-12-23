import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import img from "../../assets/trivia_header.jpeg";
import * as S from "./styles";

const Layout = (props) => {
  return (
    <S.DivLayout>
      <Header backgroundImage={img}/>
      {props.children}
      <Footer />
    </S.DivLayout>
  );
};

export default Layout;
