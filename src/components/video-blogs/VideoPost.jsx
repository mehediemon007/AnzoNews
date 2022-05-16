import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

const VideoPost = ({news}) => {

    return (
            <>
                <div className="single-video-post">
                    <div className="video-post-image position-relative">
                        <img src={`images/blogs/${news.image}`} alt={news.alt}/>
                        <VideoModal/>
                    </div>
                    <div className="video-post-info mt-4">
                        <Link to="/blog-details"><h4 className="overflow-text">{news.title}</h4></Link>
                        <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i>{news.name}</span><span><i className="uil uil-clock-three me-2"></i>{news.date}</span></p>
                        <p>{news.des}</p>
                    </div>
                </div>
            </>
    )
}

export default VideoPost