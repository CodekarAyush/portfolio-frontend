import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaAws, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress,SiMui ,SiNginx,SiChakraui , SiMongodb,SiTailwindcss, SiPostman,SiGraphql , SiVercel} from "react-icons/si";
import {TbBrandMysql,TbBrandNextjs } from 'react-icons/tb'
const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        ChakraUI : <SiChakraui />,
        MaterialUI : <SiMui  />,
        Next : <TbBrandNextjs />,
        Tailwind: <SiTailwindcss />,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Graphql : <SiGraphql />,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Mysql: <TbBrandMysql />,
        AWS:<FaAws />,
        Nginx:<SiNginx />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      <div style={{'display':'flex',flexDirection:'column',justifyContent:'center'}}>
      {icon[skill]}

      <span  style={{fontSize:'14px','display':'block',marginTop:'8px','textAlign':'center'}}>{skill}</span>
      </div>
    </div>
  )
}

export default Skills
