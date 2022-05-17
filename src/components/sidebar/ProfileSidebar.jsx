import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = () => {
    return (
        <>
            <div className="account-widget bg-white"> 
                <h5 className="d-flex align-items-center mb-lg-2">My Account <span className="account-menu-toggle d-lg-none"><i className="uil uil-bars mx-2"></i></span></h5>
                <ul className="account-menu">
                    <li><Link to="/profile"><i className="uil uil-user-circle"></i>Profile</Link></li>
                    <li><Link to="recent-viewed.html"><i className="uil uil-postcard"></i>Recent Viewed</Link></li>
                    <li><Link to="activity.html"><i className="uil uil-list-ul"></i>Activities</Link></li>
                    <li><Link to="/new-post" className="active"><i className="uil uil-folder-plus"></i>New Post</Link></li>
                    <li><Link to="/forget-password"><i className="uil uil-key-skeleton"></i>Password Change</Link></li>
                    <li><Link to="#" className="logout"><i className="uil uil-sign-out-alt"></i>Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default ProfileSidebar