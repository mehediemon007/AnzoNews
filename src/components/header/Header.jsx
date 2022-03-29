import React from 'react'
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
        <header className="an-header">
            <Toolbar/>
            <div className="haeder-ads py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <Link to="/"><img src="images/logo/logo.png" alt="logo"/></Link>
                        </div>
                        <div className="col-8">
                            <a href="#"><img src="images/ads-banner.jpg" alt="ads"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </header>
    </>
  )
}

export default Header;