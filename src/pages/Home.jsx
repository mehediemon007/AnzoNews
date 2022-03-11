import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LikedPost from '../components/likeposts/LikedPost';
import VideoBlogs from '../components/video-blogs/VideoBlogs';

function Home() {
  return (
    <>
        <Header/>
        <VideoBlogs/>
        <LikedPost/>
        <Footer/>
    </>
  )
}

export default Home;