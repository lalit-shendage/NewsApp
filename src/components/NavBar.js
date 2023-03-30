import React from 'react'
import {Link} from "react-router-dom";

const NavBar=()=>{
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-info text-white fixed-top">
        <div className="container-fluid ">
            <Link className="navbar-brand " to="/title">LS news</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item"><Link  to="/" className="nav-link active">General</Link></li>
                <li className="nav-item"><Link  to="/business" className="nav-link active">Business</Link></li>
                <li className="nav-item"><Link  to="/entertainment" className="nav-link active">Entertainment</Link></li>
                <li className="nav-item"><Link  to="/health" className="nav-link active">Health</Link></li>
                <li className="nav-item"><Link  to="/science" className="nav-link active">Science</Link></li>
                <li className="nav-item"><Link  to="/sports" className="nav-link active">Sports</Link></li>
                <li className="nav-item"><Link  to="/technology" className="nav-link active">Technology</Link></li>
            </ul>
            {/* <span className="navbar-text">
                Navbar text with an inline element
            </span> */}
            </div>
        </div>
        </nav>
      </div>
    )
}

export default NavBar
