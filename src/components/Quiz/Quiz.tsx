import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]),
    [qNum, setQnum] = useState<number>(0),
    [userAnswer, setUserAnswer] = useState<string | undefined>(undefined),
    [correct, setCorrect] = useState<string>(""),
    [score, setScore] = useState<number>(0),
    [msg, setMsg] = useState<string>("");

  const nextQuestion = () => {
    if (qNum <= 9) {
      setQnum(qNum + 1);
    }
  };

  const checkAnswer = (btnVal: string) => {
    setUserAnswer(btnVal);
  };
 
  const showQuiz = () => {
    if (qNum < 10) {
      return (
        <>
          <div className="questions">{`${qNum + 1} - ${questions} `}</div>
          <div className="buttons">
            <button
              className="true"
              value="True"
              onClick={() => {
                checkAnswer("True");
                setTimeout(() => {
                  nextQuestion();
                }, 2000);
              }}
            >
              True &#10003;
            </button>
            <button
              className="false"
              value="False"
              onClick={() => {
                checkAnswer("False");
                setTimeout(() => {
                  nextQuestion();
                }, 1500);
              }}
            >
              False ✗
            </button>
          </div>
          <p id="score">Score: {score}/10</p>
          <div className="nextBtn">
            <button
              className="next"
              onClick={() => {
                nextQuestion();
              }}
            >
              Next
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <p id="msg">You have completed the Quiz!</p>
          <p id="final-score">Final Score: {score}/10</p>
          <div className="restartBtn">
            <button className="restart">Restart</button>
          </div>
        </div>
      );
    }
  };
  useEffect(() => {
    console.log("User answer:" + userAnswer + "\nCorrect:" + correct);
    if (userAnswer === correct) {
      setScore(score + 1);
    }
  }, [userAnswer]);

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&type=boolean`)
      .then((response) => {
        setQuestions(
          response.data.results[qNum].question
            ?.replaceAll("&#039;", "'")
            .replaceAll("&quot;", '"')
        );
        setCorrect(response.data.results[qNum].correct_answer);
        console.log(response.data.results[qNum].correct_answer);
        setUserAnswer("");
      });
  }, [qNum]);

  // const questionList = questions.map((questions: any, numb:number) => {
  //   return <Item key={numb} title={questions.question.replaceAll('&#039;', "'").replaceAll("&quot;", '"')} />;
  // });
  return (
    <>
      <div>{showQuiz()}</div>
    </>
  );
};
export default Quiz;
