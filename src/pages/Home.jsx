import React from 'react'
import AdsBanner from '../components/adsbanner/AdsBanner';
import BlogCategory from '../components/blog-category/BlogCategory';
import CategoryBlogs from '../components/blog-category/CategoryBlogs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Headphones from '../components/headphones/Headphones';
import HeroSlider from '../components/heroslider/HeroSlider';
import LikedPost from '../components/likeposts/LikedPost';
import NewBlogs from '../components/new-blogs/NewBlogs';
import VideoBlogs from '../components/video-blogs/VideoBlogs';

function Home() {
  return (
    <>
        <Header/>
        <HeroSlider/>
        <main className="an-main-content">
          <AdsBanner/>
          <NewBlogs/>
          <CategoryBlogs/>
          <Headphones/>
          <BlogCategory/>
          <AdsBanner/>
          <VideoBlogs/>
          <LikedPost/>
        </main>
        <Footer/>
    </>
  )
}

export default Home;