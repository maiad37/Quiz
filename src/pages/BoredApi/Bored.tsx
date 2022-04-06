import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Bored.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import HomeIcon from "../../images/home-icon.png"

const Bored = (): JSX.Element => {
  const [activity, setActivity] = useState<string>(""),
    [qNum, setQnum] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://www.boredapi.com/api/activity`).then((res) => {
      const data = res.data;
      setActivity(data.activity);
    });
  }, [qNum]);

  const showContent = () => {
    return <SmallCard activity={activity} />;
  };

  return (
    <div className="App">
      <div className="btns">
        <img
          src={HomeIcon}
          alt="home"
          className="home-icon"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="ui container">
        {showContent()}
        <div className="buttonBox">
          <button
            className="nxtBtn"
            onClick={() => {
              setQnum(qNum + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bored;
