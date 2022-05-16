import React from 'react';
import AdsBanner from '../components/adsbanner/AdsBanner';
import NewBlogs from '../components/new-blogs/NewBlogs';
import CategoryBlogs from '../components/blog-category/CategoryBlogs';
import BlogCategory from '../components/blog-category/BlogCategory';
import VideoBlogs from '../components/video-blogs/VideoBlogs';
import LikedPost from '../components/likeposts/LikedPost';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import WeeklyBlogs from '../components/weekly-blogs/WeeklyBlogs';
import PopularCategory from '../components/blog-category/PopularCategory';
import blogData from "../apis/headphone";
import MostPopularBlogs from '../components/weekly-blogs/MostPopularBlogs';
import NewsBanner from '../components/heroslider/NewsBanner';


const HomeNews = () => {

    const {latestNewsBlogs, trendingBlogs, popularBlogs } = blogData.newBlogs;

    return (
        <>
            <Header/>
            <main className="an-main-content">
                <AdsBanner/>
                <NewsBanner/>
                <NewBlogs value={{latestBlogs:latestNewsBlogs, trendingBlogs, popularBlogs}}/>
                <CategoryBlogs/>
                <MostPopularBlogs/>
                <BlogCategory/>
                <AdsBanner/>
                <VideoBlogs/>
                <WeeklyBlogs/>
                <PopularCategory/>
                <LikedPost/>
            </main>
            <Footer/>
        </>
    )
}

export default HomeNews