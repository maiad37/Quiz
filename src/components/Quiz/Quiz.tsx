import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/item";

const Quiz = () => {
  // interface Q{
  //     category:string;
  //     type:"boolean";
  //     difficulty:'easy' | 'medium' | 'hard';
  //     correct_answer: "True" | "False";
  //     incorrect_answer: "True" | "False";
  //     question:string;
  // }
  // const nextQuestion = () => {
  //     setQnum(qNum+1)
  // }
  const [questions, setQuestions] = useState([]);
  // [qNum, setQnum] = useState(0)

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&type=boolean`)
      .then((response) => {
        setQuestions(response.data.results);
      });
  }, []);

  const questionList = questions.map((questions, numb) => {
    return <Item key={numb} title={questions.question} />;
  });
  return <div>{questionList}</div>;
};
export default Quiz;
