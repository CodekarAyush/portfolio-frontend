import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Ayush Kumar Gautam</b> and I am from Lucknow , Uttar pradesh, India.
            I'm a <b>Software Engineer</b> ,  <b>B.Tech (CSE), 23 Graduate</b> and  <b> An Amateur Guitarist</b>. <br/><br/>
      
            With over a year of experience at <b> Technophilic Private Limited</b> as a <b>React Developer</b> and currently working as a <b>backend engineer</b> at <b>Jamtech Technology Private Limited</b>, I've poured my energy into some exciting projects. <br /> <br />
            If you're interested in working together or hiring me, you can find relevant links in the footer. Feel free to <b><Link to="/hire"> click here</Link></b> to send me a direct message—I'm ready to put in my best effort to make things happen.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>My Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Next'/>
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind'/>
        <Skills skill='MaterialUI'/>
        <Skills skill='ChakraUI'/>
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Mysql'/>
        <Skills skill='Graphql' />
        <Skills skill='Npm' />
        <Skills skill='Postman' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='C++' />
        <Skills skill='Nginx'/>
        <Skills skill='AWS'/>
        <Skills skill='Vercel' />
        
      </div>
    </>
  )
}

export default About