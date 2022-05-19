import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const ProfileSidebar = () => {
    return (
        <>
            <div className="account-widget bg-white"> 
                <h5 className="d-flex align-items-center mb-lg-2">My Account <span className="account-menu-toggle d-lg-none"><i className="uil uil-bars mx-2"></i></span></h5>
                <ul className="account-menu">
                    <li><NavLink to="/profile"><i className="uil uil-user-circle"></i>Profile</NavLink></li>
                    <li><NavLink to="/recent-views"><i className="uil uil-postcard"></i>Recent Viewed</NavLink></li>
                    <li><NavLink to="/activity"><i className="uil uil-list-ul"></i>Activities</NavLink></li>
                    <li><NavLink to="/new-post"><i className="uil uil-folder-plus"></i>New Post</NavLink></li>
                    <li><NavLink to="/forget-password"><i className="uil uil-key-skeleton"></i>Password Change</NavLink></li>
                    <li><Link to="#" className="logout"><i className="uil uil-sign-out-alt"></i>Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default ProfileSidebar