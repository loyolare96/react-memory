import React from "react";
import "./UnitBlock.css";

const UnitBlock = props => (
    <div className="block">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
  
  export default UnitBlock;