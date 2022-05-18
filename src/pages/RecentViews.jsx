import React,{useContext} from 'react';
import Footer from '../components/footer/Footer';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import { LangContext } from '../context/LangContext';
import {Link} from "react-router-dom";

const RecentViews = () => {

    const {langShow , setLangShow} = useContext(LangContext);

    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <Navbar  langProps={{langShow, setLangShow}}/>
            </header>
            <div className="an-ads py-4">
                <div className="container">
                    <div className="row px-lg-5">
                        <img src="images/ads-banner.jpg" alt="Ads Banner"/>
                    </div>
                </div>
            </div>
            <main className="an-main-content">
                <div className="an-recent-viewed">
                    <div className="container">
                        <div className="an-breadcrumb mb-4 text-end">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <Link to="/recent-views" className="breadcrumb-link active">Recent Views</Link>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <ProfileSidebar/>
                            </div>
                            <div className="col-lg-9">
                                <div className="recent-viewed-posts py-4 mb-50 bg-white">
                                    <h3 class="px-4">Recently Viewed</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default RecentViews