import React from 'react';
import Footer from '../components/footer/Footer';
import Header2 from '../components/header/Header2';
import SidebarWidget from '../components/sidebar/SidebarWidget';
import VideoPost from '../components/video-blogs/VideoPost';
import {Link} from 'react-router-dom'
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
                                        <li><Link to="#" className="pt-0"><img src="images/svg-icons/trend.svg" alt="Trend"/>Trending</Link></li>
                                        <li><Link to="#"><img src="images/svg-icons/popular.svg" alt="Popular"/>Popular</Link></li>
                                        <li><Link to="#"><img src="images/svg-icons/most-read.svg" alt="Most Read"/>Most Read</Link></li>
                                        <li><Link to="#" className="has-children"><img src="images/svg-icons/category.svg" alt="Category"/>Categories</Link>
                                            <ul className="sidebar-sub-menu">
                                                <li><Link to="#">National</Link></li>
                                                <li><Link to="#">International</Link></li>
                                                <li><Link to="#">Sports</Link></li>
                                                <li><Link to="#">Life Style</Link></li>
                                                <li><Link to="#">Technology</Link></li>
                                                <li><Link to="#">Economics</Link></li>
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