import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import * as S from "./styles";

const ScoreGame = ({ correctAnswer = 0, totalQuestions = 0 }) => {
  return (
    <S.DivScoreStats>
      <S.DivScoreGame>
        <S.TitleScoreGame>Score Stats</S.TitleScoreGame>
        <p>Total Questions: {totalQuestions}</p>
        <p>Correct Answers: {correctAnswer}</p>
        {totalQuestions === correctAnswer ? (
          <S.ResultScoreGame>¡YOU WIN!</S.ResultScoreGame>
        ) : (
          <S.ResultScoreGame>¡YOU LOST!</S.ResultScoreGame>
        )}
      </S.DivScoreGame>
      <Link to="/">
        <Button>Restart</Button>
      </Link>
    </S.DivScoreStats>
  );
};

export default ScoreGame;
