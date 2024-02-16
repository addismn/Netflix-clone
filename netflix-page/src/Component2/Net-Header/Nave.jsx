import React from 'react'
import NeflixLogo from './Image/toppng.com-netflix-logo-png-download-1280x544.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Line from '../Line/IdentificationLine.jsx'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'./Navbar.css'

function Header2() {
  return (
    <>
      <div className=''>
        <div className='nave-R-L '>
            <div className='header-left'>
              <ul className='list '>
                <li className='logo'><img src={NeflixLogo} alt="" /></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latests</li>
                <li>MyList</li>
                <li>Browse by Langugese</li>
              </ul>
            </div>
            <div className='header-Right'>
            <ul>
              <li><SearchIcon/></li>
              <li><NotificationsNoneIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header2