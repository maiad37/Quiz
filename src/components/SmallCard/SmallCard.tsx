import React from "react";
import "./SmallCard.css";

const SmallCard = (props: any) => {
  return (
    <div className="card-body">
      <div className="content">
        <span id="activity">{props.activity}</span>
      </div>
    </div>
  );
};

export default SmallCard;
