import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";
import SingleVote from './SingleVote';

const VoteWidget = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <span className="slick-nav-next slick-arrow arrow-btn" onClick={onClick}><i className='uil uil-arrow-right'></i></span>
        );
    }

    const voteSliderOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        autoplay:true,
        dots:false,
        nav:true,
        nextArrow: <SampleNextArrow />,
    }

    return (
        <>
            <div className="vote-widget mb-4">
                <img src="images/blogs/vote.jpg" alt="Vote"/>
                <div className="vote-content p-4 bg-white">
                    <Slider className="vote-topics" {...voteSliderOptions}>
                        <SingleVote/>
                        <SingleVote/>
                        <SingleVote/>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default VoteWidget