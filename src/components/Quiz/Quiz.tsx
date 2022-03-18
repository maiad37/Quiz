import React, { useEffect, useState } from "react";
import './Quiz.css'
import axios from "axios";

const Quiz:React.FC = () => {
  // interface Q{
  //     category:string;
  //     type:"boolean";
  //     difficulty:'easy' | 'medium' | 'hard';
  //     correct_answer: "True" | "False";
  //     incorrect_answer: "True" | "False";
  //     question:string;
  // }

   const nextQuestion = () => {
     if( qNum <10){
      setQnum(qNum+1)
    }
   }

   const checkAnswer = () => {
     if(userAnswer===correct){
      console.log("you are correct!")
      var Tbtn = document.getElementById("true")
      Tbtn?.style.backgroundColor = "green";
     }else{
       console.log("you are wrong!")
     }
   }
  const [questions, setQuestions] = useState([]),
   [qNum, setQnum] = useState(0),
   [userAnswer, setUserAnswer] = useState(""),
   [correct, setCorrect] = useState(""), 
   [color, setColor] = useState("grey");

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&type=boolean`)
      .then((response) => {
        setQuestions(response.data.results[qNum].question?.replaceAll('&#039;', "'").replaceAll("&quot;", '"'));
       setCorrect(response.data.results[qNum].correct_answer)
       
      });
  }, [qNum]);

  // const questionList = questions.map((questions: any, numb:number) => {
  //   return <Item key={numb} title={questions.question.replaceAll('&#039;', "'").replaceAll("&quot;", '"')} />;
  // });
  return(
    <>
      <div>
        {`${qNum + 1} - ${questions} `}
        <div className="buttons">
          <button className="true" value="True" onClick={()=>{setUserAnswer("True"); checkAnswer()}}>True</button>
          <button className="false" value="False" onClick={()=>{setUserAnswer("False"); checkAnswer()}}>False</button>
        </div>
       <div className="nextBtn"><button className="next" onClick={nextQuestion}>Next</button></div> 
      </div>
    </>
    )
};
export default Quiz;  
