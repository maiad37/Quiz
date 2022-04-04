import "./App.css";
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()

  return (
    <div className="LandingPage">
      <div className="top-cont">
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1588139094921-01da2d0bc337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="quiz app"
              width="200px"
              height="200px"
              onClick={() => navigate("/quiz")}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1588139094921-01da2d0bc337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="quiz app"
              width="200px"
              height="200px"
              onClick={() => navigate("/bored")}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1588139094921-01da2d0bc337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="quiz app"
              width="200px"
              height="200px"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1588139094921-01da2d0bc337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
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
