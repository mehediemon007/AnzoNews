import React from 'react'
import Navbar from './Navbar';
import Toolbar from './Toolbar';

function Header() {
  return (
    <>
        <header classNameName="an-header">
            <Toolbar/>
            <div className="haeder-ads py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <a href="index.html"><img src="images/logo/logo.png" alt="logo"/></a>
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