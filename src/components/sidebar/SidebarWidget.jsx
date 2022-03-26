import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import SingleVote from './vote-widget/SingleVote';
import VoteWidget from './vote-widget/VoteWidget';

function SidebarWidget() {

    const voteSliderOptions = {
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        nav:true,
        // navText:["",(".owl-navigation .arrow-btn")],
    }

    return (
        <div className="an-siderbar-widget">
            <div className="row">
                <div className="col-xl-12 col-sm-6">
                    <div className="related-widget hoz-blog">
                        <h4 className="mb-4">Most Related</h4>
                        <div className="single-blog mb-4">
                            <div className="blog-image position-relative">
                                <a href="#"><img src="images/blogs/sidebar-headset.jpg" alt="Headset"/></a>
                            </div>
                            <div className="blog-content bg-white">
                                <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                <a href="#"><p className="blog-date">Masud R Delta</p></a>
                                <p className="blog-date">November 21, 2021</p>
                            </div>
                        </div> 
                        <div className="single-blog mb-4">
                            <div className="blog-image position-relative">
                                <a href="#"><img src="images/blogs/ear-buds.jpg" alt="Ear buds"/></a>
                            </div>
                            <div className="blog-content bg-white">
                                <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                <a href="#"><p className="blog-date">Masud R Delta</p></a>
                                <p className="blog-date">November 21, 2021</p>
                            </div>
                        </div> 
                        <div className="single-blog mb-4">
                            <div className="blog-image position-relative">
                                <a href="#"><img src="images/blogs/mi-drone.jpg" alt="Drone"/></a>
                            </div>
                            <div className="blog-content bg-white">
                                <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                <a href="#"><p className="blog-date">Masud R Delta</p></a>
                                <p className="blog-date">November 21, 2021</p>
                            </div>
                        </div>
                        <div className="single-blog mb-4">
                            <div className="blog-image position-relative">
                                <a href="#"><img src="images/blogs/black-buds.jpg" alt="Ear Buds"/></a>
                            </div>
                            <div className="blog-content bg-white">
                                <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                <a href="#"><p className="blog-date">Masud R Delta</p></a>
                                <p className="blog-date">November 21, 2021</p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col-xl-12 col-sm-6">
                    <h4 className="mb-4">Popular Categories</h4>
                    <div className="category-widget d-block">
                        <div className="blog-img">
                            <a href="#"><img src="images/blogs/hp-laptop.jpg" alt="Hp Laptop"/></a>
                            <a href="#" className="tag">Laptop</a>
                        </div>
                        <div className="blog-img">
                            <a href="#"><img src="images/blogs/rgb-laptop-flat.jpg" alt="Rgb Laptop"/></a>
                            <a href="#" className="tag">Gaming Laptop</a>
                        </div>
                        <div className="blog-img">
                            <a href="#"><img src="images/blogs/black-laptop.jpg" alt="Black Laptop"/></a>
                            <a href="#" className="tag">Monitor</a>
                        </div>
                        <div className="blog-img">
                            <a href="#"><img src="images/blogs/old-laptop.jpg" alt="Used Laptop"/></a>
                            <a href="#" className="tag">Desktop</a>
                        </div>
                        <div className="blog-img">
                            <a href="#"><img src="images/blogs/lenovo-laptop.jpg" alt="Lenovo Laptop"/></a>
                            <a href="#" className="tag">Power Laptop</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-sm-6">
                    <div className="vote-widget mb-4">
                        <h4 className="mb-4">Online Vote</h4>
                        <VoteWidget/>
                    </div>
                </div>
                <div className="col-xl-12 col-sm-6">
                    <img src="images/blogs/sidebar-ads.jpg" alt="ads" className="mb-4 rounded-2"/>
                </div>
                <div className="col-xl-12 col-sm-7">
                    <div className="social-widget mb-4">
                        <h4 className="mb-4">Social Link</h4>
                        <ul className="widget-social-links d-flex flex-wrap">
                            <li><a href="#" className="fb-link"><span><i className="uil uil-facebook-f"></i> Facebook</span><span>5K</span></a></li>
                            <li><a href="#" className="tweet-link"><span><i className="uil uil-twitter"></i> Twitter</span><span>6K</span></a></li>
                            <li><a href="#" className="insta-link"><span><i className="uil uil-instagram"></i> Instagram</span><span>7K</span></a></li>
                            <li><a href="#" className="youtube-link"><span><i className="uil uil-youtube"></i> Youtube</span><span>8K</span></a></li>
                            <li><a href="#" className="snap-link"><span><i className="uil uil-snapchat-ghost"></i> Snapchat</span><span>10K</span></a></li>
                            <li><a href="#" className="linkedin-link"><span><i className="uil uil-linkedin-alt"></i> Linkedin</span><span>15K</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarWidget;