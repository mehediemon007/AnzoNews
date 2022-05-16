import React from 'react';
import {Link} from 'react-router-dom';
import data from "../../apis/headphone";

const NewsBanner = () => {

    const {newsBanner: news} = data;

    return (
        <>
            <div className="an-banner news-banner sec-spacer-80 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mb-4 mb-xl-0">
                            <div className="single-blog overlay-blog h-100">
                                <div className="blog-image rounded-2 bg-image">
                                    {/* <img src="images/news/biden.jpg" alt="Biden"/> */}
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <span className="bg-danger tag">Latest</span>
                                    <Link to="/blog-details"><h2 className="blog-title text-white">{news[0].title}</h2></Link>
                                    <p className="mt-3"><span className="blog-date me-3"><img src="images/man-avatar.png" alt="user-avatar"/>{news[0].name}</span><span className="blog-date"><img src="images/clock-avatar.png" alt="Clock Avatar"/>{news[0].date}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    {news.slice(1,3).map((item,index)=>(
                                        <div className={`single-blog overlay-blog mb-3 ${index === 1 ? 'mb-sm-0' : '' }`} key={item.id}>
                                            <div className="blog-image rounded-2">
                                                <img src={`/images/news/${item.image}`} alt={item.alt}/>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="blog-content">
                                                <Link to="/blog-details"><h4 className="blog-title text-white">{item.title}</h4></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {item.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-sm-6">
                                    {news.slice(3,5).map((item,index)=>(
                                        <div className={`single-blog overlay-blog ${index === 0 ? 'mb-3' : '' }`} key={item.id}>
                                            <div className="blog-image rounded-2">
                                                <img src={`/images/news/${item.image}`} alt={item.alt}/>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="blog-content">
                                                <Link to="/blog-details"><h4 className="blog-title text-white">{item.title}</h4></Link>
                                                <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {item.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default NewsBanner