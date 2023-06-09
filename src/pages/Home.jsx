import React from 'react'
import './pages.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />

    <section className='home-content'>


          </section>


    <Footer />

    </>
  )
}
