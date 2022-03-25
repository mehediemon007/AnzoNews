import React from 'react'
import Banner from '../components/banners/Banner';
import BlogCategory from '../components/blog-category/BlogCategory';
import CategoryBlogs from '../components/blog-category/CategoryBlogs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Headphones from '../components/headphones/Headphones';
import LikedPost from '../components/likeposts/LikedPost';
import NewBlogs from '../components/new-blogs/NewBlogs';
import VideoBlogs from '../components/video-blogs/VideoBlogs';

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <NewBlogs/>
        <CategoryBlogs/>
        <Headphones/>
        <BlogCategory/>
        <Banner/>
        <VideoBlogs/>
        <LikedPost/>
        <Footer/>
    </>
  )
}

export default Home;