import React from 'react'
import './hero.css'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
<div className="hero-container">
    <div className="hero-left">

        <img src="/portrait.jpg" alt="" />
    </div>
    <div className="hero-right">

        <h1>Hello, I'm Olga</h1>
        <p> a passionate front-end developer with a love for creating intuitive and engaging user experiences. 
            I have dedicated myself to the art of crafting beautiful websites that not only look stunning but also function flawlessly.</p>
    <div className="buttons">

    <Link to='/projects'> My projects </Link>
    <Link to='/about'> About me </Link>
    </div>
    
    </div>
</div>


    </div>
  )
}
