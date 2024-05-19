// Unused code



import '../css/CaseStudy.css';
import React, { useState } from 'react';

const CaseStudyPage = () => {
  const [clickedCircle, setClickedCircle] = useState(null);

  // Function to handle click on circle
  const handleClick = (index) => {
    setClickedCircle(index);
  };

  // Function to create the circles
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 12; i++) {
      circles.push(
        <div
          className={clickedCircle === i ? "circle clicked" : "circle"}
          key={i}
          onClick={() => handleClick(i)}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div>
      <h1>Case Study</h1>
      <div className="line-container">
        <div className="line"></div>
        <div className="circles-container">{renderCircles()}</div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
