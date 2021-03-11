import React from "react";
import Info from './Info';

const OutputDisplay = ({ dynamicBgd, dynamicColor, celsius }) => {
    return (
    <div
      className="output-display"
      style={{ backgroundImage: `url(${dynamicBgd})` }}
    >
      {celsius !== '' && (
        <div className="output-info">
          <div className="output-icons" style={{ color: dynamicColor }}>
            <Info celsius={celsius} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;
