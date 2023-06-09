import React from 'react'
import './pages.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/footer/Footer'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

export const About = () => {
  return (
    <> 
       <Navbar />

       <div className="about-content">
        <div className="about">
            <div className="about-top">
                <div className="about-left">
                <img src="https://placehold.co/400" alt="" />

                </div>
                <div className="about-right">
                    <p> I'm Olga, a passionate front-end developer with a keen eye for aesthetics and a love for creating visually appealing, user-friendly websites. With [number] years of experience in the field, I have honed my skills in HTML, CSS, and JavaScript to bring ideas to life on the web.

As a creative individual, I find joy in transforming designs into responsive and intuitive interfaces that not only engage users but also provide seamless experiences across different devices and platforms. I thrive on the challenges of keeping up with the ever-evolving web technologies, constantly seeking innovative solutions to deliver the best user experiences. </p>
                </div>
               

            </div>
            <div className="about-bottom">
            <div className="about-left">
              <p> I invite you to browse through my portfolio, where you will find a selection of my projects that showcase my technical skills and design sensibilities. I'm always excited to take on new challenges, so if you have a project in mind or would like to discuss potential collaborations, please don't hesitate to reach out. Let's create something extraordinary together!

Thank you for visiting, and I look forward to connecting with you soon.

 </p>

                </div>
                <div className="about-right">
                <img src="https://placehold.co/400" alt="" />
                                 </div>
            </div>
            <div className="about-skills">
              <ul>  Technologies i use :
                <li>   <AiFillHtml5/> Html </li>
              <li>     <DiCss3/> Css </li>
              <li>  <SiTailwindcss/> Tailwind </li>
              <li> <FaReact/> React </li>
              <li> <AiFillGithub/> Github</li>
           
              
             
              
                
                 </ul> 
              <ul>  Technologies i am learning : 
                
                <li> <SiTypescript/> TypeScript </li>
                <li> <FaNodeJs/> Node.js </li>
                <li> <SiMongodb/> MongoDB  </li>
                </ul> 


            </div>
            <div className="contact">
                <h3> Get in touch with me!</h3>
                <p>
                    Email : chyujii@gmail.com
                    Linkedin:
                    Github:
                </p>
            </div>
        </div>
       </div>
    <Footer />
     </>

  )
}
