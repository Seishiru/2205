import React from 'react';
import '../css/Home.css';

const Map = () => {
  // Array of strings containing the words for each circle
  const circleLabels = [
    "Introduction",
    "Project Background",
    "Problem Statement",
    "User Research",
    "Ideation Brainstorming",
    "Prototype",
    "User Testing",
    "Iterative Design",
    "Final Design",
    "Impact",
    "Lessons",
    "Conclusion"
  ];

  return (
    <div className="map-container">
      {circleLabels.map((label, index) => (
        <React.Fragment key={index}>
          <div className="circle-container">
            <div className="circle">{index + 1}</div>
            <div className="circle-label">{label}</div> {/* Add label under each circle */}
          </div>
          {index < 11 && <div className="line"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
