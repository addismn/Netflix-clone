import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import'./Footer.css'

function Footer() {
  return (
    <div>
      <div className='inner_container'>
        <div className='footer_icons'>
          <FacebookIcon/>
          <span className='space'></span>
          <InstagramIcon/>
          <span className='space'></span>
          <YouTubeIcon/>
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privasy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='footer_service'>Service Code</div>
        <div>&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  )
}

export default Footer