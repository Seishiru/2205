import React from 'react';
import '../css/Home.css';

const Map = () => {
  return (
    <div className="map-container">
      {Array.from({ length: 12 }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="circle">{index + 1}</div>
          {index < 11 && <div className="line"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
