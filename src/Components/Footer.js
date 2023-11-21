import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ayush Gautam</h4>
      <h4>Copyright &copy; 2023 Ayush</h4>
      <div className='footerLinks'>
        <a href="https://github.com/codekarAyush" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ayush-gautam-b021a41b5" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:ayushGautam.dev@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer