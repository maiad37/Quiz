import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState([]),
    [qNum, setQnum] = useState(0),
    [userAnswer, setUserAnswer] = useState("undeff"),
    [correct, setCorrect] = useState(""),
    [score, setScore] = useState(0);
  // interface Q{
  //     category:string;
  //     type:"boolean";
  //     difficulty:'easy' | 'medium' | 'hard';
  //     correct_answer: "True" | "False";
  //     incorrect_answer: "True" | "False";
  //     question:string;
  // }

  const nextQuestion = () => {
    if (qNum < 10) {
      setQnum(qNum + 1);
    }
  };

  const checkAnswer = (btnVal:string) => {
    setUserAnswer(btnVal)
    if (userAnswer === correct) {
      setScore(score + 1);
      console.log("User answer:" + userAnswer + "\nCorrect:" + correct);
    } else {
      console.log("User answer:" + userAnswer + "\nCorrect:" + correct);
    }
  };

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
      });
  }, [qNum]);

  // const questionList = questions.map((questions: any, numb:number) => {
  //   return <Item key={numb} title={questions.question.replaceAll('&#039;', "'").replaceAll("&quot;", '"')} />;
  // });
  return (
    <>
      <div>
        <div className="questions">{`${qNum + 1} - ${questions} `}</div>
        <div className="buttons">
          <button
            className="true"
            value="True"
            onClick={() => {
              checkAnswer("True");
            }}
          >
            True
          </button>
          <button
            className="false"
            value="False"
            onClick={() => {
              checkAnswer("False");
            }}
          >
            False
          </button>
        </div>
        <p>Score: {score}/10</p>
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
      </div>
    </>
  );
};
export default Quiz;
