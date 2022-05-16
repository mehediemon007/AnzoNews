import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Data from "../../apis/like-post";

const WeeklyBlogs = () => {

    const {likedPosts} = Data;

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <span className="slick-nav-next slick-arrow" onClick={onClick}><i className="uil uil-angle-right-b"></i></span>
        );
      }
      
    function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
            <span className="slick-nav-prev slick-arrow" onClick={onClick}><i className="uil uil-angle-left-b"></i></span>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode:false,
        centerPadding: "0px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                  dots:false
                }
            },
        ]
    };

    return (
        <>
            <div className="an-weekly-top sec-spacer-80">
                <div className="container">
                    <div class="sec-heading d-flex justify-content-between align-items-center mb-4">
                        <h4>WEEKLY TOP</h4>
                    </div>
                    <Slider class="week-top-news" {...settings}>
                        {likedPosts.slice(0,9).map((blog,index)=>(
                            <div class="single-blog" key={index}>
                                <div class="blog-image">
                                    <Link to="/blog-details"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></Link>
                                </div>
                                <div class="blog-content bg-white">
                                    <Link to="/blog-details"><h4 class="blog-title">Google Has Decided To Open Branch In Dhaka</h4></Link>
                                    <p class="meta-data mt-3"><span><img src="images/cmnt-user.jpg" alt="user-avatar" class="rounded-circle"/> {blog.name}</span><span><img src="images/calendar-ylo.png" alt="Calendar Avatar"/> {blog.date}</span></p>
                                    <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid dolores odit ab eveniet deleniti.</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default WeeklyBlogs