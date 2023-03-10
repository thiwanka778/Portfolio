import React from 'react';
import "../index.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://github.com/thiwanka778" target="_blank" className='footer-icon'> < GitHubIcon/></a>
        <div className='footer-icon'> < InstagramIcon/></div>
        <div className='footer-icon'> < FacebookIcon/></div>
        <a  href="https://www.linkedin.com/in/sandalu-thiwanka-570786214" target="_blank" className='footer-icon'> < LinkedInIcon/></a>
        <div className='footer-icon'> < TwitterIcon/></div>
        </div>
  )
}

export default Footer