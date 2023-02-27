import React from 'react'
import Header from '../Header/Header';
import "../Hero/Hero.css";
import doc from '../assets/document.png'; // that's gives the CV image path
import Nav from '../Nav/Nav';

function hero() {
  return (
    <div className='hero' id='home'>
      <Header />
      <div className='display'>
        <h3 className='heroChild Hello'>
          Hello world, I'm
        </h3>
        <h1 className='heroChild Name'>
          <span className="color"></span>Shoaib <span className="color">Jadallah</span>
        </h1>
        <span className='heroChild CSE'>
          I'm a Computer Systems Engineer.
        </span>
        <span className='heroChild displayCV'>
          <a download className='CV' href="./assets/Shoaib Jadallah's -CV.pdf">Download CV</a>{/* <img className='docImg' src={doc} alt="this is the CV doc icon" /> */}
        </span>
      </div>
      <Nav />
    </div>
  )
}

export default hero