import React from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <span class="slick-nav-next slick-arrow" onClick={onClick}><i class="uil uil-angle-right-b"></i></span>
    );
  }
  
function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
        <span class="slick-nav-prev slick-arrow" onClick={onClick}><i class="uil uil-angle-left-b"></i></span>
    );
}

const HeroSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
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
            <div className="an-banner">
                <div className="container">
                    <div className="row">
                        <Slider className="an-banner-wpr" {...settings}>
                            <div className="single-blog item overlay-blog">
                                <img src="images/banner/banner-1.jpg" alt="banner"/>
                                <div className="blog-content">
                                    <a href="#"><h2 className="blog-title text-white">This is the title of a news is the title of a news</h2></a>
                                    <p className="blog-date mt-2">Novermber 21 , 2021</p>
                                </div>
                            </div>
                            <div className="single-blog item overlay-blog">
                                <img src="images/banner/banner-3.jpg" alt="banner"/>
                                <div className="blog-content">
                                    <a href="#"><h2 className=" blog-title text-white">This is the title of a news is the title of a news</h2></a>
                                    <p className="blog-date mt-2">Novermber 21 , 2021</p>
                                </div>
                            </div>
                            <div className="single-blog item overlay-blog">
                                <img src="images/banner/banner-2.jpg" alt="banner"/>
                                <div className="blog-content">
                                    <a href="#"><h2 className="blog-title text-white">This is the title of a news is the title of a news</h2></a>
                                    <p className="blog-date mt-2">Novermber 21 , 2021</p>
                                </div>
                            </div>
                            <div className="single-blog item overlay-blog">
                                <img src="images/banner/banner-4.jpg" alt="banner"/>
                                <div className="blog-content">
                                    <a href=""><h2 className="blog-title text-white">This is the title of a news is the title of a news</h2></a>
                                    <p className="blog-date mt-2">Novermber 21 , 2021</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSlider