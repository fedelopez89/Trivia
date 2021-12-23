import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { getQuestions } from "../../helpers/getQuestions";
import Button from "../Button/Button";
import ScoreGame from "../ScoreGame/ScoreGame";
import * as S from "./styles";

const timerProps = {
  isPlaying: true,
  size: 50,
  strokeWidth: 6,
};

const {questions, quantityQuestions} = getQuestions();

const PlayTrivia = () => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questionInArray, setQuestionInArray] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(0);
  const [next, setNext] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Once user click on a option answer.
  const handleOnClickAnswer = (event, selectedAnswer) => {
    event.preventDefault();
    if (selectedAnswer) {
      setAnswerCorrect((prevState) => prevState + 1);
    }
    setShowAnswer(true);
    setNext(true);
  };

  // When count Down Timer finishes.
  const handleOnCompleteCountDownCircle = () => {
    setShowAnswer(true);
    setNext(true);
  };

  // First time Page is Load.
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(idTimeOut);
  }, []);

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setShowAnswer(false);
      if (next) {
        if (currentQuestion === questions.length) {
          setShowScore(true);
        } else {
          setCurrentQuestion((prevState) => prevState + 1);
          setQuestionInArray((prevState) => prevState + 1);
        }
        setNext(false);
      }
    }, 2000);
    return () => clearTimeout(idTimeOut);
  }, [next]);

  // Component when page is loading.
  if (isLoading) {
    return (
      <S.StyleLoader type="Puff" color="#00BFFF" height={100} width={100} />
    );
  }

  // Component to return once trivia is finished.
  if (showScore) {
    return (
      <ScoreGame
        correctAnswer={answerCorrect}
        totalQuestions={quantityQuestions}
      />
    );
  }

  return (
    <>
      {questions.length > 0 && (
        <S.QuestionDiv>
          {!showAnswer &&
          <S.StyleCountdownCircleTimer>
            <CountdownCircleTimer
              style={{ margin: "auto" }}
              {...timerProps}
              isPlaying
              onComplete={handleOnCompleteCountDownCircle}
              duration={questions[questionInArray].lifetimeSeconds}
              colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </S.StyleCountdownCircleTimer>
          }
          <p>
            <b>{questions[questionInArray].text}</b>
          </p>
          <S.QuestionImageDiv
            backgroundImage={questions[questionInArray].image}
          ></S.QuestionImageDiv>
          <S.OptionsAnswerDiv>
            {questions[questionInArray].options.map(
              ({ text, correct }, index) => (
                <Button
                  key={index}
                  disabled={showAnswer}
                  style={{background: showAnswer && correct && 'forestgreen'}}
                  onClick={(event) => handleOnClickAnswer(event, correct)}
                >
                  {text}
                </Button>
              )
            )}
            <p>
              {currentQuestion} of {quantityQuestions} questions
            </p>
          </S.OptionsAnswerDiv>
        </S.QuestionDiv>
      )}
    </>
  );
};

export default PlayTrivia;
