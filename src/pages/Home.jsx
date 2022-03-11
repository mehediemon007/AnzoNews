import React from 'react'
import BlogCategory from '../components/blog-category/BlogCategory';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LikedPost from '../components/likeposts/LikedPost';
import VideoBlogs from '../components/video-blogs/VideoBlogs';

function Home() {
  return (
    <>
        <Header/>
        <BlogCategory/>
        <VideoBlogs/>
        <LikedPost/>
        <Footer/>
    </>
  )
}

export default Home;