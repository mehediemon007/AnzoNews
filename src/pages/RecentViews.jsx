import React,{useState} from 'react';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import {Link} from "react-router-dom";
import blogs from "../apis/grid-catagory";
import SingleBlog from '../components/list-blogs/SingleBlog';

const RecentViews = () => {

    const [noOfBlog, setBlogNum] = useState(7);
    const [clicked,setClicked] = useState(false);


    function loadMore(e){
        e.preventDefault();
        setClicked(true);
        setBlogNum(noOfBlog + 2);
    }

    return (
        <>
            <header className="an-header">
                <Toolbar/>
                <Navbar/>
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
                                    <div className="blog-category-list">
                                        {blogs["listBlogs"].slice(0,noOfBlog).map((blog,index) => <SingleBlog blog={blog} key={index}/>)}
                                    </div>
                                    <div className="text-center">
                                        {noOfBlog < blogs["listBlogs"].length && <button className="view-more-btn" onClick={loadMore}>View More <i className={`uil ${clicked ? "uil-arrow-circle-down" : "uil-arrow-circle-right"}`}></i></button>}
                                    </div>
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