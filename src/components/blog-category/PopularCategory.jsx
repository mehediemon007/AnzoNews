import React from 'react';
import {Link} from 'react-router-dom';

const PopularCategory = () => {
    return (
        <>
            <div className="an-blogs py-5 bg-white">
                <div className="container">
                    <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                        <h4>Most Popular</h4>
                        <Link to="/category-three-grid" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row flex-column flex-md-row">
                                <div className="col-12">
                                    <div className="single-blog">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6">
                                                <div className="blog-content ps-0">
                                                    <Link to="/blog-details"><h3 className="blog-title overflow-title">Wrong-way crash on I-80 kills 1, injures another, Illinois State Police say</h3></Link>
                                                    <p className="mt-2">The scene of the accident was resolved and police questioning was completed according to the due process, and an amicable settlement made with.</p>
                                                    <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21 , 2021</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-image rounded-2">
                                                    <Link to="/blog-details"><img src="images/news/accident.jpg" alt="Accident"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <img src="images/news/blood.jpg" alt='news'/>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">Red Cross Declares First-ever Blood Crisis</h5></Link>
                                                <p>Its worst blood shortage in over a decade, posing a concerning risk to care.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <img src="images/news/blood.jpg" alt='news'/>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">Red Cross Declares First-ever Blood Crisis</h5></Link>
                                                <p>Its worst blood shortage in over a decade, posing a concerning risk to care.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <img src="images/news/blood.jpg" alt='news'/>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">Red Cross Declares First-ever Blood Crisis</h5></Link>
                                                <p>Its worst blood shortage in over a decade, posing a concerning risk to care.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="single-news">
                                                <img src="images/news/blood.jpg" alt='news'/>
                                                <Link to="/blog-details"><h5 className="blog-title overflow-title">Red Cross Declares First-ever Blood Crisis</h5></Link>
                                                <p>Its worst blood shortage in over a decade, posing a concerning risk to care.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="row align-items-md-center">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="single-blog"><Link to="/blog-details"><img src="images/news/obama.jpg" alt="Obama" className="mb-4 w-100"/></Link></div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="single-news pt-1 border-0">
                                        <Link to="/blog-details"><h5 className="blog-title overflow-title">Goodbye, Barack Hussein Obama: America's first 'Muslim president'</h5></Link>
                                        <p className="mt-lg-2">Obama’s characteristics made him an enduring symbol, a beacon for millions of kids.</p>
                                        <Link to="/blog-details" className="my-2"><h5 className="blog-title overflow-title">This is the title of a news is the title of a news This is the title of a news</h5></Link>
                                        <Link to="/blog-details"><h5 className="blog-title overflow-title">This is the title of a news is the title of a news This is the title of a news</h5></Link>
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

export default PopularCategory