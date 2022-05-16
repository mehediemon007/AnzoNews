import React from 'react';
import Footer from '../components/footer/Footer';
import Header2 from '../components/header/Header2';
import SidebarWidget from '../components/sidebar/SidebarWidget';
import VideoPost from '../components/video-blogs/VideoPost';
import data from '../apis/headphone';
import ImagePost from '../components/video-blogs/ImagePost';

const News = () => {

    const {featureNews} = data.newBlogs;
    return (
        <>
            <Header2/>
            <main className="an-main-content">
                <div className="an-news-home">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-xl-block col-xl-3">
                                <div className="an-sidebar-menu-wpr bg-white p-4 sticky-sidebar">
                                    <ul className="sidebar-menu nav-menu">
                                        <li><a href="#" className="pt-0"><img src="images/svg-icons/trend.svg" alt="Trend"/>Trending</a></li>
                                        <li><a href="#"><img src="images/svg-icons/popular.svg" alt="Popular"/>Popular</a></li>
                                        <li><a href="#"><img src="images/svg-icons/most-read.svg" alt="Most Read"/>Most Read</a></li>
                                        <li><a href="#" className="has-children"><img src="images/svg-icons/category.svg" alt="Category"/>Categories</a>
                                            <ul className="sidebar-sub-menu">
                                                <li><a href="#">National</a></li>
                                                <li><a href="#">International</a></li>
                                                <li><a href="#">Sports</a></li>
                                                <li><a href="#">Life Style</a></li>
                                                <li><a href="#">Technology</a></li>
                                                <li><a href="#">Economics</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 pb-80">
                                <div className="an-main-sec">
                                    <div className="an-news-blog">
                                        <div className="news-sub-blog p-4 bg-white">
                                            <h2 className="mb-4">Featured News</h2>
                                            {featureNews.filter(news => news.tag === 'Feature').map(news=>(
                                                <VideoPost news={news} key={news.id}/>
                                            ))}
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">Latest News</h2>
                                            {featureNews.filter(news => news.tag === 'Latest').map(news=>{

                                                if(news.postType === 'video'){
                                                    return (<VideoPost news={news} key={news.id}/>)
                                                }else{
                                                    return (<ImagePost news={news} key={news.id}/>)
                                                }

                                            })}
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">Popular News</h2>
                                            {featureNews.filter(news => news.tag === 'Popular').map(news =>{

                                                if(news.postType === 'video'){
                                                    return <VideoPost news={news} key={news.id}/>
                                                }else{
                                                    return <ImagePost news={news} key={news.id}/>
                                                }

                                            })}
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">News You Interest</h2>
                                            {featureNews.filter(news => news.tag === 'Interest').map(news =>{

                                                if(news.postType === 'video'){
                                                    return <VideoPost news={news} key={news.id}/>
                                                }else{
                                                    return <ImagePost news={news} key={news.id}/>
                                                }
                                                
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <SidebarWidget sticky='true'/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default News