import React from 'react'

const NewsBanner = () => {
    return (
        <>
            <div className="an-banner news-banner sec-spacer-80 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mb-4 mb-xl-0">
                            <div className="single-blog overlay-blog h-100">
                                <div className="blog-image rounded-2 bg-image">
                                    {/* <img src="images/news/biden.jpg" alt="Biden"/> */}
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <span className="bg-danger tag">Latest</span>
                                    <a href="#"><h2 className="blog-title text-white">Joe Biden order excluding non citizens from census could cost much than native</h2></a>
                                    <p className="mt-3"><a href="" className="blog-date me-3"><img src="images/man-avatar.png" alt="user-avatar"/>Ava Sharpe</a><a href="#" className="blog-date"><img src="images/clock-avatar.png" alt="Clock Avatar"/>03 jan 2021</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-blog overlay-blog mb-3">
                                        <div className="blog-image rounded-2">
                                            <img src="images/news/milisia.jpg" alt="Military"/>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#"><h4 className="blog-title text-white">Military Are Refushes To Fight Against Iraq Again</h4></a>
                                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21,2021</p>
                                        </div>
                                    </div>
                                    <div className="single-blog overlay-blog mb-3 mb-sm-0">
                                        <div className="blog-image rounded-2">
                                            <img src="images/news/us-rocket.jpg" alt="Rocket"/>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#"><h4 className="blog-title text-white">Nasa And US Government Launched Rocket</h4></a>
                                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21,2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-blog overlay-blog mb-3">
                                        <div className="blog-image rounded-2">
                                            <img src="images/news/iran-trade.jpg" alt="Iran Trade"/>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#"><h4 className="blog-title text-white">Trump And Iran Trade War Coming To End</h4></a>
                                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21,2021</p>
                                        </div>
                                    </div>
                                    <div className="single-blog overlay-blog">
                                        <div className="blog-image rounded-2">
                                            <img src="images/news/senegal.jpg" alt="Senegal"/>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#"><h4 className="blog-title text-white">China Tries To Friendship With Senegal In 2022</h4></a>
                                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> Novermber 21,2021</p>
                                        </div>
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

export default NewsBanner