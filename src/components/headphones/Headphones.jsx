import React from 'react';
import Headphone from './Headphone.jsx';
import {Link } from "react-router-dom"
import headphoneData from "../../apis/headphone.js"

const Headphones = () => {
    const data = headphoneData["headephone"];
    return (
        <>
            <div className="an-blogs sec-spacer-80 bg-white">
                <div className="container">
                    <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                        <h4>HEADPHONES</h4>
                        <Link to="#" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row flex-column-reverse flex-md-row">
                                <div className="col-md-6">
                                    {data.slice(0,2).map( blog =>
                                        (
                                            <div className="single-blog" key={blog.id}>
                                                <div className="blog-image">
                                                    <Link to="/category-three-grid"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></Link>
                                                </div>
                                                <div className="blog-content ps-0">
                                                    <Link to="/category-three-grid"><h4 className="blog-title overflow-title">{blog.title}</h4></Link>
                                                    <p className="mt-2 d-lg-none d-xxl-block">{blog.des}</p>
                                                    <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {blog.date}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-md-6">
                                    <div className="single-blog overlay-blog mb-4 mb-md-0 h-xl-100" key={data[2].id}>
                                        <div className="blog-image rounded-2">
                                            <img src={`images/blogs/${data[2].image}`} alt={data[2].alt}/>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="blog-content">
                                            <Link to="/category-three-grid"><h3 className="blog-title text-white overflow-title">{data[2].title}</h3></Link>
                                            <Link to="#"><p className="blog-date mt-2"><img src="images/man-avatar.png" alt="user-avatar"/> {data[2].name}</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-blog"><Link to="#"><img src="images/blogs/normal-headset.jpg" alt="Normal Headset" className="mb-4"/></Link></div>
                            {data.slice(3,6).map((blog,index)=> (<Headphone blog={blog} key={blog.id}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headphones