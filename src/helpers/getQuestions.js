import triviaFile from "../trivia";

export const getQuestions = () => {
  return {
    questions: triviaFile.questions,
    quantityQuestions: triviaFile.questions.length,
  };
};
