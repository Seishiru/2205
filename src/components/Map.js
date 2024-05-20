import React from 'react';
import '../css/Home.css';
import { Link } from 'react-scroll';

const Map = () => {
  return (
    <div className="map-container ">
      {Array.from({ length: 12 }).map((_, index) => (
        <React.Fragment key={index}>
          <Link
            to={index + 3}
            smooth={true}
            duration={500}
            offset={-230} 
            className="circle"
            >
            {index + 1}
          </Link>
            {index < 11 && <div className="line"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Map;
