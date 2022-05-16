import React from 'react';
import {Link} from 'react-router-dom'

const MostPopularBlogs = () => {
    return (
        <>
            <div className="an-blogs py-5 bg-white">
                <div className="container">
                    <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                        <h4>Most Popular</h4>
                        <Link to="/category-list" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row flex-column flex-md-row">
                                <div className="col-12">
                                    <div className="single-blog">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-6">
                                                <div className="blog-image rounded-2">
                                                    <Link to="/blog-details"><img src="images/news/protest.jpg" alt="Protest"/></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-6">
                                                <div className="blog-content ps-0">
                                                    <Link to="/blog-details"><h3 className="blog-title overflow-title">This is the title of a news is the title of a news</h3></Link>
                                                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa non consequatur a, aspernatur sequi voluptates doloribus similique.</p>
                                                    <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <Link to="/category-list">WORLD</Link>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of</h5></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <Link to="/category-list">WORLD</Link>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of</h5></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <Link to="/category-list">WORLD</Link>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of</h5></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <Link to="/category-list">WORLD</Link>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of</h5></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="row align-items-center">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="single-blog"><Link to="/blog-details"><img src="images/news/putin.jpg" alt="Putin" className="mb-4 w-100"/></Link></div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="single-news pt-1 border-0">
                                        <Link to="/category-list">WORLD</Link>
                                        <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of a news</h5></Link>
                                        <p><span className="blog-date me-3"><img src="images/man-avatar.png" alt="user-avatar"/>Ava Sharpe</span><span className="blog-date"><img src="images/clock-avatar.png" alt="Clock Avatar"/>03 jan 2021</span></p>
                                        <p className="mt-lg-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque recusandae culpa soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default MostPopularBlogs