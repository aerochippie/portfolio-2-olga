import React from 'react'
import './pages.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { Link } from "react-router-dom";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
export const About = () => {
  return (
    <> 
       <Navbar />

       <div className="about-content">
        <div className="about">


            <div className="about-top">


                <div className="about-left">
                <img src="/portrait.jpg" alt="" />

                </div>


                <div className="about-right">
                  <h1> Hei!</h1>
                    <p> <strong> I'm Olga, </strong> a passionate <strong> front-end developer </strong> with a keen eye for <strong> aesthetics </strong> and a love for creating visually appealing, user-friendly websites. <br/><br/>

As a creative individual, I find joy in <strong> transforming designs </strong> into responsive and intuitive <strong> interfaces </strong> that not only engage users but also provide seamless experiences across different devices and platforms. <br/>
<br/>I thrive on the challenges of keeping up with the <strong>  ever-evolving web technologies </strong>, constantly seeking innovative solutions to deliver the best user experiences. </p>
               
               

                </div>
               
              
            </div>
            <div className="about-skills">
                  <div className="skills-left">  
                  <ul> <h3>Technologies i use : </h3> 
                <li style={{color: "#CD4F34"}}>   <AiFillHtml5/> Html </li>
              <li style={{color: "#254BDD"}}>     <DiCss3/> Css </li>
              <li style={{color: "#07B0CE"}}>  <SiTailwindcss/> Tailwind </li>
              <li style={{color: "#5ED3F3"}}> <FaReact/> React </li>
              <li style={{color: "black"}}> <AiFillGithub/> Github</li>
           
              
             
              
                
                 </ul> 
                  </div>
  <div className="skills-right"> 
              <ul> <h3>  Technologies i am learning :</h3> 
                
                <li style={{color: "#2F74C0"}}> <SiTypescript/> TypeScript </li>
                <li style={{color: "#498A44"}}> <FaNodeJs/> Node.js </li>
                <li style={{color: "#449A45"}}> <SiMongodb/> MongoDB  </li>
                </ul> 
                </div>

            </div>


            <div className="contact">
                <h3> <SiMinutemailer/>  Get in touch with me! </h3>
                <p>
                <BiMailSend/> chyujii@gmail.com </p>
                <p>  <strong>   <Link to='https://www.linkedin.com/in/olga-sznajdrowicz-905a311a3/'>  <BsLinkedin/> / olga </Link> </strong></p>
                <p>  <strong> <Link to='https://github.com/aerochippie'> <FaGithub/> / aerochippie </Link>  </strong>
                </p>
            </div>
        </div>
       </div>
    <Footer />
     </>

  )
}
