import React,{useEffect, useState} from 'react';
import Footer from '../components/footer/Footer';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import VideoModal from '../components/video-blogs/VideoModal';
import {Link} from "react-router-dom";
import data from '../apis/headphone';

const VideoGallery = () => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{

        setVideos(data.newBlogs.featureNews)

    },[])

    return (
        <>
            <header className="an-header">
                <Toolbar/>
                <Navbar/>
            </header>
            <div className="an-ads py-4">
                <div className="container">
                    <div className="row px-lg-5">
                        <img src="images/ads-banner.jpg" alt="Ads Banner"/>
                    </div>
                </div>
            </div>
            <main className="an-main-content">
                <div className="an-video-gallery-2 pb-5">
                    <div className="container">
                        <div className="an-breadcrumb mb-4 text-end">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <Link to="/video-gallery" className="breadcrumb-link active">Video Gallery</Link>
                        </div>
                        <div className="row g-2 g-sm-3">
                            {videos.filter(video => video.postType === 'video').map(video => (
                                <div className="col-6 col-sm-4" key={video.id}>
                                    <div className="single-video-post">
                                        <div className="video-post-image position-relative">
                                            <img src={`images/blogs/${video.image}`} alt={video.alt}/>
                                            <VideoModal/>
                                        </div>
                                        <div className="video-post-info mt-4">
                                            <Link to="/blog-details"><h4 className="overflow-text">{video.title}</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default VideoGallery