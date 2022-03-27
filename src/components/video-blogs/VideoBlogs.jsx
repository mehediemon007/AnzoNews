import React from 'react';
import videoData from "../../apis/video-blogs";
import VideoBlog from './VideoBlog';
import VideoModal from './VideoModal';

function VideoBlogs() {
  return (
    <>
        <div className="an-video-gallery sec-spacer-80">
            <div className="container">
                <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                    <h4 className="text-white">HEADPHONES</h4>
                    <a href="#" className="more-link text-white">More <i className="uil uil-angle-right-b"></i></a>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="single-video-post overlay-blog position-relative mb-xl-0" key={0}>
                            <div className="video-post-image">
                                <img src={`images/blogs/${videoData[0].image}`} alt={videoData[0].alt} className="video-main-img"/>
                                <VideoModal/>
                            </div>
                            <div className="video-post-info blog-content">
                                <a href="#"><h5 className="blog-title text-white">{videoData[0].title}</h5></a>
                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {videoData[0].date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-6">
                                {videoData.slice(1,4).map((blog,index)=> <VideoBlog blog={blog} key={index+1}/>)}
                            </div>
                            <div className="col-6">
                                {videoData.slice(4,7).map((blog,index)=> <VideoBlog blog={blog} key={index+1}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoBlogs;