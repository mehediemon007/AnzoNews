import React from 'react';
import Footer from '../components/footer/Footer';
import Header2 from '../components/header/Header2';
import SidebarWidget from '../components/sidebar/SidebarWidget';

const News = () => {
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
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/car-rally.jpg" alt="Car Relly"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-text">FOX Sports & FOX Deportes Set Programming Schedule for Daytona Speedweeks Coverage</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/messi.jpg" alt="Meesi"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Messi Breaks World Record Of 300 Goals In UEFA League</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <a href="#"><img src="images/blogs/ashes.jpg" alt="Ashes"/></a>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Australia Smached England With 5-0 Series Victory Ashes 2021-22</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">Latest News</h2>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/usa-airline.jpg" alt="Unitied Air"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-text">Unitied Airline Starts Flights After A Week Break</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/aid-ship.jpg" alt="Aid"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Covid-stricken Australian aid ship makes contactless delivery to virus-free Tonga</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <a href="#"><img src="images/blogs/deliver-boy.jpg" alt="Delivery Boy"/></a>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">‘More than a job’: the food delivery co-ops putting fairness into the gig economy</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/ukraine-army.jpg" alt="Army"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Ukraine crisis: Nord Stream 2 gas pipeline won’t open if Russia invades, says US – live coverage</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <a href="#"><img src="images/blogs/usa-trade.jpg" alt="Usa Trade"/></a>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Markets rattled as hawkish Fed signals US rate rises coming – business live</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">Popular News</h2>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/lava.jpg" alt="Lava"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overlay-title">Lava Fire: Raw Video Of Lava Fire As Flames Burn Buildings In Subdivision</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/everest.jpg" alt="Everest"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overlat-title">Nepal Tourist Department Banned Camping On Everest</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/snow-fall.jpg" alt="Snow Fall"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Snow Fall Breaks Down Transportation Lead To Food Crisis</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="news-sub-blog mt-4 p-4 bg-white">
                                            <h2 className="mb-4">News You Interest</h2>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/space-news.jpg" alt="Space News"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">The long-awaited James Webb Space Telescope has a big to-do list</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/bitcoin-news.jpg" alt="Bit Coin"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Bit Coin Market Falls 1 Trillion Dollars Over Night</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <img src="images/blogs/light-energy.jpg" alt="Engergy"/>
                                                    <div className="video-overlay">
                                                        <a className="vid-icon venobox vbox-item more videolink" href="https://www.youtube.com/watch?v=yzCkM5MRaaI">
                                                            <img src="images/svg-icons/play-icon.svg" alt="Play Icon"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Havard Student Innovates Smallest Thermal Chips For Smart Watch</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
                                            <div className="single-video-post">
                                                <div className="video-post-image position-relative">
                                                    <a href="#"><img src="images/blogs/lab-news.jpg" alt="Lab"/></a>
                                                </div>
                                                <div className="video-post-info mt-4">
                                                    <a href="#"><h4 className="overflow-title">Scientist Tries To Search Corona's New Varient Genom</h4></a>
                                                    <p className="meta-data my-2"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                                    <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,.</p>
                                                </div>
                                            </div>
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