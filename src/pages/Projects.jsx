import React from 'react'
import './pages.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <>
     <Navbar />

    <div className="projects-content">
        <div className="projects-cards">


            <div className="card">
    <img src="https://placehold.co/400" alt="" />
    <div className="card-content">
        <h2> Project 1 </h2>
        <p> Descriptiion Descriptiion Descriptiion Descriptiion </p>
    </div>
    <div className="buttons">
    <Link to="https://github.com/">Github</Link>
    <Link to="https://github.com/">Demo</Link>
    </div>
            </div>
           <div className="card">
    <img src="https://placehold.co/400" alt="" />
    <div className="card-content">
        <h2> Project 1 </h2>
        <p> Descriptiion Descriptiion Descriptiion Descriptiion </p>
    </div>
    <div className="buttons">
    <Link to="https://github.com/">Github</Link>
    <Link to="https://github.com/">Demo</Link>
    </div>
            </div>
            <div className="card">
    <img src="https://placehold.co/400" alt="" />
    <div className="card-content">
        <h2> Project 1 </h2>
        <p> Descriptiion Descriptiion Descriptiion Descriptiion </p>
    </div>
    <div className="buttons">
    <Link to="https://github.com/">Github</Link>
    <Link to="https://github.com/">Demo</Link>
    </div>

            </div>
        </div>
    </div>


     <Footer />
    </>
  )
}
