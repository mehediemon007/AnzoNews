import React from 'react';
import VideoModal from './VideoModal';
import {Link} from "react-router-dom"

function VideoBlog(props) {

    const {image,alt,title,date} = props.blog;
    return (
        <>
            <div className="single-video-post">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="video-post-image position-relative">
                            <img src={`images/blogs/${image}`} alt={alt}/>
                            <VideoModal/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="video-post-info">
                            <Link to="/blog-details"><h5 className="blog-title text-white">{title}</h5></Link>
                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoBlog;