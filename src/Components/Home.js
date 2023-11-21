import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const redirectHire =(e)=>{
navigate('/hire')
  }
  
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There !</h1>
          <h1>I'M <b>AYUSH KUMAR GAUTAM</b></h1>
          <Typed/>   
          <Button onClick={redirectHire} style={{'backgroundColor':'#9067C6','color':'white', 'letterSpacing':'2px','margin':'25px auto 0px','display':'block'}} 
          
          color="success">
  Hire Me !

</Button>
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1> 
          <p>

          Experienced software engineer with a year in the field, I specialize in translating raw concepts into functional web projects.
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            My journey has been marked by diverse projects, allowing me to master technologies such as <b>React.js</b> <b> Node.js</b> <b> Express.js</b> <b> MongoDB</b> <b> MySQL </b>and <b>  C++</b> am working on a few 
            Beyond code, I find joy in the nuanced art of crafting software solutions. Fueled by a love for problem-solving and innovation, I bring a passion for turning ideas into reality. An aficionado of both <b>code </b> and  <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   . I am dedicated to refining my skills and contributing meaningfully to every project I undertake.

          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home