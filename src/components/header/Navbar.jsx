import React from 'react';
import {Link} from "react-router-dom";
import NavMenu from './NavMenu';

function Navbar(props) {
    
    return (
        <>
            <div className={`an-nav${!props.dark ? ' bg-white' : ''}`}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                        <Link to="/"><img src={`images/logo/${props.dark ? 'logo-food.png' : 'logo.png'}`} alt="logo"/></Link>
                        <NavMenu/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar