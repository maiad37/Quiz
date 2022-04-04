import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bored.css";
import SmallCard from "../../components/SmallCard/SmallCard";

const Bored = () => {
  const [activity, setActivity] = useState<string>(""),
    [qNum, setQnum] = useState<number>(0);

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
