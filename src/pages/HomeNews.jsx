import React from 'react';
import AdsBanner from '../components/adsbanner/AdsBanner';
import NewBlogs from '../components/new-blogs/NewBlogs';
import CategoryBlogs from '../components/blog-category/CategoryBlogs';
import BlogCategory from '../components/blog-category/BlogCategory';
import VideoBlogs from '../components/video-blogs/VideoBlogs';
import LikedPost from '../components/likeposts/LikedPost';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const HomeNews = () => {
    return (
        <>
            <Header/>
            <main className="an-main-content">
                <AdsBanner/>
                <NewBlogs/>
                <CategoryBlogs/>
                <BlogCategory/>
                <AdsBanner/>
                <VideoBlogs/>
                <LikedPost/>
            </main>
            <Footer/>
        </>
    )
}

export default HomeNews