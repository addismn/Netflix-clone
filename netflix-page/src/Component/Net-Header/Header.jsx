import React from 'react'
import NeflixLogo from './Image/toppng.com-netflix-logo-png-download-1280x544.png'
import Line from '../Line/IdentificationLine.jsx'
import'./Navbar.css'

function Header() {
  return (
    <>
    <div className='MainPage'>
        <div className='header-div'>
          <div className='logo-div'>
             <img className='logo' src={NeflixLogo} alt="logo" />
          </div>
          <div className='button-div'>
            <button className='signIn-button'>Sign In</button>
          </div>
        </div>
        <div className='content'>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          </div>
          <div className='input-putton'>
            <input className='' type="email" />
            <button className=''>Get Started &gt;</button>
          </div>
    </div>
    <Line/>
    </>
  )
}

export default Header