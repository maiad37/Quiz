import "./App.css";
import { useNavigate } from "react-router-dom";
import QuizAppLogo from "./images/quizz-app-icon.gif";
import IdeasAppLogo from "./images/ideas-icon.png";
function App() {
  const navigate = useNavigate();

  return (
    <div className="LandingPage">
      <div className="top-cont">
        <div className="grid-container">
          <div className="grid-item">
            <img
              src={QuizAppLogo}
              alt="quiz app"
              width="200px"
              height="200px"
              onClick={() => navigate("/quiz")}
            />
          </div>
          <div className="grid-item">
            <img
              src={IdeasAppLogo}
              alt="suggest activity app"
              width="200px"
              height="200px"
              onClick={() => navigate("/bored")}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="quiz app"
              width="200px"
              height="200px"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="quiz app"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
