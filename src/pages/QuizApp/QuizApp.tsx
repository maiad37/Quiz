import './QuizApp.css'
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import HomeIcon from "../../images/home-icon.png"

const QuizApp = (): JSX.Element =>{

  const navigate = useNavigate()
  
  return (
    <div className="QuizApp">
      <div className="btns">
        <img
          src={HomeIcon}
          alt="home"
          className='home-icon'
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <Card/>
    </div>
  );
}

export default QuizApp;