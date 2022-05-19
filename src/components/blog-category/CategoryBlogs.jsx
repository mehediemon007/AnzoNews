import React from 'react';
import categoryData from "../../apis/headphone";
import {Link} from "react-router-dom"

const CategoryBlogs = () => {

    const {laptop,gadget} = categoryData;

    return (
        <>
           <div className="an-blog-categories sec-spacer-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                                <h4>LAPTOP’S</h4>
                                <Link to="/category-list" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                            <div className="row category-1">
                                {laptop.map((blog,index) =>
                                    (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <div className="single-blog mb-4 overlay-blog">
                                                <div className="blog-image rounded-2">
                                                    <img src={`images/blogs/${blog.image}`} alt={blog.alt}/>
                                                    <div className="image-overlay"></div>
                                                </div>
                                                <div className="blog-content">
                                                    <Link to="/category-list"><h4 className="blog-title text-white overflow-title">{blog.title}</h4></Link>
                                                    <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {blog.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                                <h4>Gadgets</h4>
                                <Link to="/category-list" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                            <div className="row hoz-blog category-2">
                                {gadget.map((blog,index)=>
                                    (
                                        <div className="single-blog mb-4" key={index}>
                                            <div className="blog-image position-relative">
                                                <Link to="/category-list"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></Link>
                                                <span className="bg-warning tag">{blog.tag}</span>
                                            </div>
                                            <div className="blog-content bg-white">
                                                <Link to="/category-list"><h3 className="blog-title">{blog.title}</h3></Link>
                                                <a href="#"><p className="blog-date"><img src="images/man-avatar.png" alt="user-avatar"/> {blog.name}</p></a>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {blog.date}</p>
                                            </div>
                                        </div> 
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-xl-3 mt-50 mt-xl-0">
                            <div className="an-sidebar-widget">
                                <div className="row">
                                    <div className="col-xl-12 col-md-6">
                                        <h3 className="mb-4">TOP CATEGORIES</h3>
                                        <div className="category-widget">
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
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-6">
                                        <div className="archive-widget bg-white">
                                            <h3 className="mb-2">ARCHIVE</h3>
                                            <form action="" className="archive-form">
                                                <fieldset className="an-input position-relative" id="datePicker">
                                                    <label htmlFor="archive-input" className="visually-hidden">Archive</label>
                                                    <input type="date" id="archive-input" autoComplete="off" placeholder="Search News"/>
                                                    <span className="input-append"><i className="uil uil-schedule"></i></span>
                                                </fieldset>
                                                <button className="archive-search">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-6">
                                        <img src="images/blogs/sidebar-ads.jpg" alt="ads" className="mb-4 rounded-2"/>
                                    </div>
                                    <div className="col-xl-12 col-md-6">
                                        <div className="social-widget">
                                            <h3 className="mb-4">Social Link</h3>
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
                        </div>
                    </div>
                </div>
           </div> 
        </>
    )
}

export default CategoryBlogs