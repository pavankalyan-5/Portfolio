import React from 'react'
import InstagramIcon from'@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
         <a href='https://www.instagram.com/pavan_kalyan_01/' target="_blank"><InstagramIcon/></a>
        <a href='https://github.com/pavankalyan-5' target="_blanket"><GitHubIcon/></a>
        <a href='https://www.facebook.com/profile.php?id=100007064625485' target="_blank"><FacebookIcon/></a>
        <a href='https://www.linkedin.com/in/pavankalyan05/' target="_blank"><LinkedInIcon/></a>
        <a href='https://twitter.com/GuntuboinaPavan' target="_blanket"><TwitterIcon/></a>
      </div>
        <p>&copy; 2022 PavanKalyan_01</p>
    </div>
  )
}
