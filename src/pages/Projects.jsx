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
                        <div className="card-image">
                        <img src="/project1thumb.png" alt="" />
                        </div>
                        <div className="card-content">
                            <h2> "Pocket" - Ecom Web Store </h2>
                            <p> A simple e-commercial website built with React. <br /> This website is fetching data from an API, <br /> and has a basic store funcionality</p>
                        </div>
                        <div className="buttons">
                            <Link to="https://github.com/aerochippie/pocket-ecom">Github</Link>
                            <Link to="https://remarkable-kitsune-e53141.netlify.app/">Demo</Link>
                        </div>
                    </div>



                    <div className="card">
                    <div className="card-image">
                        <img src="/project2thumb.png" alt="" />
                        </div>
                        <div className="card-content">
                            <h2> Holidaze - Vacation Booking </h2>
                            <p> Vacation booking website, built with React. Website Fetches data from an API and has a customer-facing and admin-facing interface </p>
                        </div>
                        <div className="buttons">
                            <Link to="https://github.com/aerochippie/react-exam-holidaze">Github</Link>
                            <Link to="https://verdant-sundae-09a78c.netlify.app/">Demo</Link>
                        </div>
                    </div>



                    <div className="card">
                    <div className="card-image">
                        <img src="/project3thumb.png" alt="" />
                        </div>
                        <div className="card-content">
                            <h2> BidBay - Bidding Website </h2>
                            <p> Website build with Javascript, Tailwind and packed with Vite. </p>
                        </div>
                        <div className="buttons">
                            <Link to="https://github.com/aerochippie/bidbay-semester-project-yr2/tree/main/bidbay-semester-project">Github</Link>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
