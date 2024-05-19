import '../css/Home.css';
import React from 'react';
import cecil from '../images/cecil.png';
import von from '../images/von.png';
import yongco from '../images/yongco.jpg';
import ayam from '../images/ayam.png';

const Home = () => {
  return (
    <div className="center">
      <div className="module">
        <div className='moduleContent column'>
          <img src={require('../images/HomescreenQuote.png')} alt='Home Screen Quote'/>
          <a href="/case-study" className='learnMore'>
            <img src={require('../images/LearnMoreButton.png')} alt='Learn More'/>
          </a>
          <img src={require('../images/BlueDog.png')} alt='Blue Dog'/>
        </div>
      </div>
      <div className="module altColor">
        <div className='moduleContent'>
          <h1>SDG Portfolio</h1>
          <p>
            Welcome to the USC SDG Portfolio, a dedicated showcase of our DSP G6's engagement with the Sustainable Development Goals. Here, we feature our groups driven case studies that address global sustainability challenges and demonstrate our active pursuit of innovation and change.
          </p>
        </div>
      </div>
      <div className="module">
        <div className='moduleContent'>
          <h1>Design Project Team</h1>
          <p>
            Group 6 of the Design Project course in University of San Carlos
          </p>
          <div className="team">
            <div className="team-member">
              <img src={cecil} alt="Cecil"/>
              <p>Cecil</p>
            </div>
            <div className="team-member">
              <img src={ayam} alt="Kristian"/>
              <p>Kristian</p>
            </div>
            <div className="team-member">
              <img src={von} alt="Von"/>
              <p>Von</p>
            </div>
            <div className="team-member">
              <img src={yongco} alt="Yongco"/>
              <p>Yongco</p>
            </div>
          </div>
        </div>
      </div>
      <div className="module altColor">
        <div className='moduleContent'>
          <h1>Our SDG Case Study</h1>
          <p>
            Explore our detailed case studies focused on Good Health and Well-Being. Click the SDG to learn about the specific challenges addressed and our innovative solution proposed.
          </p>
          <a href="https://sdgs.un.org/goals/goal3" target='_blank' rel='noopener noreferrer'>
            <button className='sdg3'>
              <h2>SDG 3: Good Health and Well-Being</h2>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
