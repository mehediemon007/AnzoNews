import React from 'react'
import BlogCategory from '../components/blog-category/BlogCategory';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Headphones from '../components/headphones/Headphones';
import LikedPost from '../components/likeposts/LikedPost';
import VideoBlogs from '../components/video-blogs/VideoBlogs';

function Home() {
  return (
    <>
        <Header/>
        <Headphones/>
        <BlogCategory/>
        <VideoBlogs/>
        <LikedPost/>
        <Footer/>
    </>
  )
}

export default Home;