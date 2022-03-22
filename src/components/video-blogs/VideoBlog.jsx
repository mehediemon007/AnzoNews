import React from 'react'

function VideoBlog(props) {
    
    const {image,alt,title,date} = props.blog;
    return (
        <>
            <div className="single-video-post">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="video-post-image position-relative">
                            <img src={`images/blogs/${image}`} alt={alt}/>
                            <div className="video-overlay">
                                <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                    <i className="uil uil-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="video-post-info">
                            <a href="#"><h5 className="blog-title text-white">{title}</h5></a>
                            <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoBlog;