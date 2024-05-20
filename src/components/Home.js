import '../css/Home.css';
import React from 'react';
import cecil from '../images/cecil.png';
import von from '../images/von.png';
import yongco from '../images/yongco.png';
import ayam from '../images/ayam.png';
import ideation from '../images/ideation.png';
import { Element, Link } from 'react-scroll';
import Map from './Map';

const Home = () => {
  return (
    <div className="center">
      <div className="module">
        <div className='moduleContent column'>
          <img src={require('../images/HomescreenQuote.png')} alt='Home Screen Quote' />
          <Link
            className="learnMore"
            to={1}
            spy={true}
            smooth={true}
          >
            <img src={require('../images/LearnMoreButton.png')} alt='Learn More' />
          </Link>
          <img src={require('../images/BlueDog.png')} alt='Blue Dog' />
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
      <Element name={2} key={2}>
        <div className="module">
          <div className='moduleContent'>
            <h1>Design Project Team</h1>
            <p>
              Group 6 of the Design Project course in University of San Carlos
            </p>
            <div className="team">
              <div className="team-member">
                <img src={cecil} alt="Cecil" />
                <a href='https://github.com/Seishiru' target='blank'>
                  <p>Cecil<br /> rapharaphael54@gmail.com</p>
                </a>
              </div>
              <div className="team-member">
                <img src={ayam} alt="Kristian" />
                <a href='https://github.com/krisyam' target='blank'>
                  <p>Kristian<br /> kristian.ayam@gmail.com</p>
                </a>
              </div>
              <div className="team-member">
                <img src={von} alt="Von" />
                <a href='' target='blank'>
                  <p>Von <br /> von.manginsay71@gmail.com</p>
                </a>
              </div>
              <div className="team-member">
                <img src={yongco} alt="Yongco" />
                <a href='https://github.com/GM-Yongco' target='blank'>
                  <p>Giulio<br /> yongcogiulio125@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name={1} key={1}>
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


            {/* Include the Map component here */}
            
            <div className="sticky-map ">
              <Map />
              <div className="labels-container ">
                {[
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
                ].map((label, index) => (
                  <div key={index} className="label">{label}</div>
                ))}
              </div>
            </div>
            


            {/* Intro and Overview */}
            <div class="rectangle">
                <h1 class="intro-header">Introduction and Overview</h1>
              <div class="intro-text">
              <p>In the contemporary landscape of healthcare, MedApp stands as a vanguard of 
                innovation, offering a transformative solution set to redefine patient-provider 
                dynamics. By leveraging cutting-edge technology, MedApp facilitates seamless 
                access to healthcare services, enabling patients to schedule appointments, 
                engage in virtual consultations, and manage their medical journey from the 
                comfort of their homes. However, amidst its promise of convenience and efficiency, 
                MedApp encounters challenges ranging from ensuring data security and privacy to 
                bridging the digital divide and fostering widespread adoption. We will explore 
                MedApp's pioneering approach to healthcare delivery while addressing the hurdles 
                it faces in its mission to revolutionize the healthcare ecosystem.</p>
              </div>
            </div>

            {/* Profile Background */}
            <div class="rectangle">
                <h1 class="intro-header">Profile Background</h1>
              <div class="prof-bg-text">

                <div class="rectangle">
                <h3 class="sub-header">Purpose:</h3>
                <p>The genesis of the MedApp project stems from a growing need to address the 
                inefficiencies and challenges prevalent in the healthcare appointment scheduling 
                process. With advancements in technology transforming various industries, the 
                healthcare sector stands to benefit significantly from innovative solutions that 
                streamline processes and enhance user experiences.</p>
                </div>
                
                <div class="rectangle">
                <h3 class="sub-header">Project Initiation:</h3>
                <p>The MedApp project was initiated to address these industry trends, market 
                conditions, and user behaviors effectively. Recognizing the need for a comprehensive 
                and user-friendly solution, our team embarked on developing a mobile application that 
                simplifies healthcare access and appointment management. By leveraging technology 
                and integrating key features such as appointment scheduling, medical record management, 
                and secure communication, MedApp aims to meet the evolving needs and expectations of 
                modern healthcare consumers.</p>
                </div>

                <div class="rectangle">
                <h3 class="sub-header">Vision for the Future:</h3>
                <p>The genesis of the MedApp project stems from a growing need to address the 
                inefficiencies and challenges prevalent in the healthcare appointment scheduling
                process. With advancements in technology transforming various industries, the 
                healthcare sector stands to benefit significantly from innovative solutions that 
                streamline processes and enhance user experiences.</p>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div class="rectangle">
                <h1 class="intro-header">Problem Statement</h1>
              <div class="intro-text">
              <p>In the contemporary landscape of healthcare, MedApp stands as a vanguard of 
                innovation, offering a transformative solution set to redefine patient-provider 
                dynamics. By leveraging cutting-edge technology, MedApp facilitates seamless 
                access to healthcare services, enabling patients to schedule appointments, 
                engage in virtual consultations, and manage their medical journey from the 
                comfort of their homes. However, amidst its promise of convenience and efficiency, 
                MedApp encounters challenges ranging from ensuring data security and privacy to 
                bridging the digital divide and fostering widespread adoption. We will explore 
                MedApp's pioneering approach to healthcare delivery while addressing the hurdles 
                it faces in its mission to revolutionize the healthcare ecosystem.</p>
              </div>
              <div class="rectangle">
                <h3 class="sub-header">Solution:</h3>
                <p>Based on our user research, we've identified key insights that inform our 
                  solution design, catering to the primary needs and pain points of both patients 
                  and healthcare providers. Patients prioritize convenience, accessibility, and 
                  transparency in appointment scheduling. To address this, our solution offers 
                  real-time availability updates, automated reminders, and seamless communication
                  channels with healthcare providers. Meanwhile, healthcare providers require an 
                  intuitive and efficient scheduling system that seamlessly integrates with their 
                  workflows, a need our solution fulfills.
                </p>
                </div>
            </div>

            {/* User Research */}
            <div class="rectangle">
                <h1 class="intro-header">User Research</h1>
              <div class="prof-bg-text">

                <div class="rectangle">
                <h3 class="sub-header">Purpose:</h3>
                <p>The purpose of conducting user research is to gain valuable insights 
                  into the needs, preferences, and behaviors of the target users. By 
                  understanding their perspectives and challenges, the design team can 
                  develop solutions that effectively address their requirements and enhance 
                  user satisfaction.</p>
                </div>

                <div class="rectangle">
                <h3 class="sub-header">Research Methods:</h3>
                <p>The user research process involved a combination of qualitative and 
                  quantitative methods, including surveys, interviews, and usability testing. 
                  Surveys provided broad insights into user demographics, preferences, and pain 
                  points, while interviews delved deeper into individual experiences and challenges. 
                  Usability testing helped evaluate the usability and effectiveness of potential 
                  design solutions.</p>
                </div>

                <div class="rectangle">
                <h3 class="sub-header">User Persona for SDG 3:</h3>
                {/* will add a Sample User Persona Picture here */}
                <h2>(picture)</h2>
                <p>Several key findings emerged from the user research, shedding light on the 
                  primary needs and pain points of both patients and healthcare providers. 
                  Patients expressed a strong desire for convenience, accessibility, and transparency 
                  in the appointment scheduling process. They highlighted the importance of features 
                  such as real-time availability updates, automated reminders, and seamless communication 
                  with healthcare providers. Healthcare providers, on the other hand, emphasized the need 
                  for an intuitive and efficient scheduling system that integrates seamlessly with their 
                  existing workflows.
                </p>
                </div>

            {/* Ideation and Brainstorming*/}
            <div class="rectangle">
                <h1 class="intro-header">Ideation and Brainstorming</h1>
              <div class="intro-text">
              <p>The ideation and brainstorming phase is essential for generating a diverse 
                range of potential solutions to address the identified problems and meet the 
                needs of the target users. This phase encourages creativity and innovation, 
                fostering an environment where team members can explore and develop ideas collaboratively.
              </p>
              {/* will add the Table of Ideas here */}
              <h2> <img src={ideation} alt="ideation" /></h2>
              <p>The design team conducted brainstorming sessions involving all stakeholders, 
                including designers, developers, healthcare professionals, and end-users. These 
                sessions were structured to encourage creativity and participation, with team members 
                freely sharing ideas and building upon each other's suggestions. Techniques such as mind 
                mapping, rapid ideation, and role-playing were employed to stimulate creativity and generate 
                a wide range of potential solutions.
              </p>
              </div>
            </div>

            {/* Prototyping */}
            <div class="rectangle">
                <h1 class="intro-header">Prototyping</h1>
              <div class="intro-text">
              <p>The prototyping phase was pivotal in translating design concepts into tangible 
                representations for user evaluation and testing. Beginning with low-fidelity 
                wireframes, the process iterated through user feedback, refining both functionality 
                and usability, before progressing to high-fidelity prototypes resembling the final 
                product. This iterative approach ensured that the final design met user needs and 
                preferences effectively.</p>
                {/* add the figma here*/}
                <h2>(the figma)</h2>
              <p>Take a closer look at our interactive design prototype to gain a comprehensive 
                understanding of the user interface and overall user experience.</p>
              </div>
            </div>

            {/* User Testing */}
            <div class="rectangle">
                <h1 class="intro-header">User Testing</h1>
              <div class="intro-text">
              <p>User testing serves as a vital phase in the design process, aiming to 
                gather feedback from users to assess usability and ensure the final 
                product meets their needs. By conducting controlled testing sessions 
                with representative users, analyzing insights, and iteratively refining 
                prototypes based on feedback, the design team ensures the creation of a 
                user-centered and effective final product.</p>
                <h2>(picture?? not sure)</h2>
              </div>
            </div>

            {/* Iterative Design */}
            <div class="rectangle">
                <h1 class="intro-header">Iterative Design Process</h1>
              <div class="intro-text">
              <p>The iterative design process emphasizes continuous improvement through 
                feedback, evaluation, and refinement across multiple cycles. Beginning 
                with ideation and conceptualization, the process progresses through prototyping, 
                testing, and iterative refinement based on user feedback and evolving project 
                requirements. By embracing this approach, the design evolves to create a user-centered 
                final product that effectively meets user needs and project goals.</p>
                <h2>(picture??)</h2>
              </div>
            </div>

            {/* Final Design */}
            <div class="rectangle">
                <h1 class="intro-header">Final Design</h1>
              <div class="intro-text">
              <p>The presentation of the final design solution encapsulates the culmination 
                of iterative refinement, showcasing refined features and aesthetics that 
                effectively address the initial problem statement and meet user needs. With 
                key features like intuitive appointment booking and secure medical record 
                management, coupled with a visually appealing user interface, the solution 
                streamlines healthcare scheduling while prioritizing user experience and accessibility. 
                Through user-centric design principles, the solution achieves project goals by delivering 
                tangible benefits to both patients and healthcare providers.</p>
              {/* add the figma here*/}
              <h2>(the figma(after feedback))</h2>
              <p>Take a closer look at our interactive design prototype to gain a comprehensive 
                understanding of the user interface and overall user experience.</p>
              </div>
            </div>

            {/* Impact */}
            <div class="rectangle">
                <h1 class="intro-header">Impact and Results</h1>
              <div class="intro-text">
              <p>Assessing the impact and results of our design solution reveals tangible 
                benefits and positive changes experienced by users and stakeholders. 
                Increased user adoption rates and improved user experiences demonstrate 
                the solution's effectiveness in meeting needs and delivering value. Measurable 
                outcomes, such as enhanced appointment attendance rates and reduced wait times, 
                highlight its impact on key performance indicators. Continuous improvement 
                remains essential for sustaining success, ensuring the solution evolves to meet 
                evolving user needs and market conditions.</p>
              </div>
            </div>

            {/* Lessons */}
            <div class="rectangle">
                <h1 class="intro-header">Lessons Learned</h1>
              <div class="intro-text">
              <p>Reflecting on the challenges and lessons learned throughout the design process has 
                provided invaluable insights that will inform our future projects. One key lesson 
                learned is the importance of deepening our understanding of user needs and behaviors 
                through more extensive and diverse user research methods. Additionally, actively 
                involving stakeholders throughout the design process is crucial for ensuring better 
                alignment with organizational goals and requirements. Furthermore, we've realized the 
                significance of expanding the scope and frequency of prototyping and testing sessions 
                to gather more comprehensive user feedback and validate design decisions effectively. 
                Unexpected insights, such as the emergence of new user needs and the critical importance 
                of accessibility, have highlighted the need for flexibility and adaptability in responding 
                to evolving user requirements. Moreover, the impact of external factors, including 
                regulatory changes and technological advancements, underscores the necessity of 
                remaining flexible and adaptable in navigating unforeseen challenges. By incorporating 
                these lessons into our design thinking process, we aim to foster a culture of continuous 
                improvement and refinement, ultimately enhancing the effectiveness and relevance of our 
                future design endeavors.</p>
              </div>
            </div>

            {/* Conclusion */}
            <div class="rectangle">
                <h1 class="intro-header">Conclusion</h1>
              <div class="intro-text">
              <p>The design project has been a journey of innovation and collaboration, 
                resulting in the creation of a transformative solution that addresses 
                the challenges of traditional healthcare appointment scheduling. Through 
                a user-centered design approach, iterative refinement, and a commitment 
                to continuous improvement, we have successfully developed a solution that 
                enhances accessibility, efficiency, and satisfaction for both patients and 
                healthcare providers.
              <ul class="conclusion">
                Key takeaways from the design project include:
              <li>The importance of prioritizing user needs and feedback throughout the design process.</li>
              <li>The value of collaboration and teamwork in fostering creativity and accelerating progress.</li>
              <li>The benefits of an iterative design approach, allowing for continuous refinement and adaptation based on user insights.</li>
              <li>The significance of addressing unexpected challenges and embracing opportunities for growth and learning.</li>
              <li>The design solution represents a significant step forward in improving healthcare access and patient experience. By streamlining the appointment scheduling process, integrating with electronic health records, and prioritizing user-friendly design, we have created a solution that meets the needs of modern healthcare consumers.</li>
              </ul>  
              <p>Moving forward, it is essential to continue monitoring the impact of the design solution, 
              gathering feedback from users, and iterating on the design to ensure its effectiveness and 
              relevance in a rapidly evolving healthcare landscape. By embracing a culture of continuous 
              improvement and innovation, we can build upon the success of this project and deliver even 
              greater value to our users and stakeholders in the future.</p>
              </p>
              </div>
            </div>

              </div>
            </div>


          </div>
        </div>
      </Element>
      
    </div>
    
  );
}

export default Home;
