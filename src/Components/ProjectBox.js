import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    KundaliGuruDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    KundaliGuruWebsite : "https://kundaliguru.com/",

    CromaxDesc : "Simplify your links with our platform! Shorten URLs effortlessly, and for logged-in users, gain insights into click statistics for each link. Enhance your link management experience and track performance conveniently within your personalized account.",
    CromaxGithub : "https://github.com/CodekarAyush/link-shortner-frontend",
    CromaxWebsite : "https://cromax.vercel.app",

    SheerwellnessDesc:"Discover nearby diagnostic centers effortlessly with our website featuring an HTML, CSS, and JavaScript design, coupled with a PHP backend. Seamlessly crafted frontend ensures a user-friendly experience, providing quick access to essential diagnostic services.",
    SheerwellnessWebsite:"https://sheerwellness.in/",
    
    PublishersAcademicDesc:"Explore a vast collection of books on our e-commerce platform, where seamless navigation meets a rich admin panel. Admins can effortlessly add books, categorize them, and share insightful blogs. Dive into a world of literature with convenience and control.",
    PublishersAcademicWebsite:"https://publishersacademic.org/",


    MechanicNowDesc:"This comprehensive MERN stack application offers users a seamless experience, allowing them to log in, schedule car servicing, and conveniently purchase high-quality car accessories. Experience the convenience of a user-friendly platform tailored for all your automotive needs.",
    MechanicNowWebsite:"https://mechanicnow.in/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox