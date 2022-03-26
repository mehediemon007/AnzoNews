import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import SingleVote from './SingleVote';

const VoteWidget = () => {

    const voteSliderOptions = {
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        nav:true,
        // navText:["",(".owl-navigation .arrow-btn")],
    }

    return (
        <>
            <div className="vote-widget mb-4">
                <img src="images/blogs/vote.jpg" alt="Vote"/>
                <div className="vote-content p-4 pb-2 bg-white">
                    <OwlCarousel className="vote-topics owl-carousel" {...voteSliderOptions}>
                        <SingleVote/>
                        <SingleVote/>
                        <SingleVote/>
                    </OwlCarousel>
                    <div className="owl-navigation">
                        <span className="arrow-btn"><a><i className="uil uil-arrow-right"></i></a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoteWidget