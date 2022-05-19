import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header2 = (props) => {

    return (
        <>
            <header className="an-header fixed-top">
                <div className="an-nav bg-dark">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                            <Link to="/"><img src="images/logo/logo.png" alt="ANews"/></Link>
                            <NavMenu/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2;