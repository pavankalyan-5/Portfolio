import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import resume from '../components/files/Resume.pdf'
export default function Navbar() {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top" >
           <div className='container'>
             <Link className="navbar-brand" to="/">Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
            
            </div>
            <a className='btn btn-outline-light' href={resume} download>Download CV</a>
           </div>
        </nav>
      
  )
}
