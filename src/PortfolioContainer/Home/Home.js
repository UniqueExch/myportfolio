import React from 'react';
import './Home.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import About from '../AboutMe/About';
import Contact from '../ContactMe/Contact';
import Resume from '../Resume/Resume';
import Project from '../Projects/Project';


export default function Home() {
  return (
    <div className='home-container'>
        <Profile/>
        <Footer/>
        <About/>
        <Resume/>
        <Project/>
        <Contact/>
    </div>
  )
}
