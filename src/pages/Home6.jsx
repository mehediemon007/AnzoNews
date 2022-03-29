import React,{useEffect} from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AdsBanner from "../components/adsbanner/AdsBanner"
import RelatedBlogs from '../components/related-blogs/RelatedBlogs';
import SidebarWidget from '../components/sidebar/SidebarWidget';
import VideoModal from "../components/video-blogs/VideoModal";

function Home6() {
    
    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="an-news mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="an-main-sec bg-white p-3 p-sm-5">
                                    <span className="tag position-relative bg-danger mb-3">Politics</span>
                                    <h2 className="mb-4 overflow-heading">Trump’s Inaccurate Claims About High ways the world, Immigration and Beyoncé.</h2>
                                    <div className="d-flex flex-wrap justify-content-between mb-4">
                                        <p className="meta-data"><span><i className="uil uil-user-circle me-2"></i> Ava Sharpe</span><span><i className="uil uil-clock-three me-2"></i> 03 jan 2021</span></p>
                                        <span className="meta-data"><i className="uil uil-plus-circle"></i> A <i className="uil uil-minus-circle"></i></span>
                                    </div>
                                    <div>
                                        <img src="images/blogs/press.jpg" alt="Press Speech"/>
                                        <p className="image-copyright">Image &copy; Copyrighted By AnzoNews</p>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between py-4">
                                            <span className="meta-data"><span>Share this news on:</span> <span><img src="images/svg-icons/twitter.svg" alt="twitter"/></span><span><img src="images/svg-icons/fb.svg" alt="facebook"/></span><span><img src="images/svg-icons/google.svg" alt="google"/></span><span><img src="images/svg-icons/youtube.svg" alt="youtube"/></span></span>
                                            <span className="meta-data"><span><i className="uil uil-clock-three me-2"></i> 2 min reads</span></span>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <div className="row my-5">
                                        <div className="col-lg-5 col-xl-6 col-xxl-5">
                                            <div className="bg-image mb-4">
                                                <img src="images/blogs/public-reaction.jpg" alt="Public Reaction"/>
                                                <p className="image-copyright">Image &copy; Copyrighted By AnzoNews</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-xl-6 xol-xxl-7">
                                            <div className="sub-blog-content">
                                                <h5>Weinstein pushs for dismissal.</h5>
                                                <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use</p>
                                                <a href="#" className="text-decoration-underline text-danger">continue reading</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="images/blogs/merch.jpg" alt="march"/>
                                        <p className="image-copyright">Image &copy; Copyrighted By AnzoNews</p>
                                    </div>
                                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <div className="single-video-post position-relative">
                                        <div className="video-post-image">
                                            <img src="images/blogs/protest.jpg" alt="Protest" className="rounded-0"/>
                                            <VideoModal/>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                </div>
                                <div className="an-comments bg-white p-4 mt-5">
                                    <h2 className="mb-4">Comments</h2>
                                    <div className="comments-wpr">
                                        <div className="d-flex align-items-center mb-4">
                                            <h5 className="me-4">22 Comments</h5>
                                            <h5><i className="uil uil-sort-amount-down me-2"></i>SORT BY</h5>
                                        </div>
                                        <div className="single-comment">
                                            <img src="images/user.jpg" alt="Smith"/>
                                            <div className="comment-content">
                                                <form className="comment-form">
                                                    <label for="comment-input"></label>
                                                    <textarea id="comment-input" placeholder="Add a public comment.."></textarea>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="single-comment">
                                            <img src="images/user.jpg" alt="Smith"/>
                                            <div className="comment-content">
                                                <p><b>Robert Smith</b> <span className="ms-5 text-muted fs-6">1 day ago</span></p>
                                                <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
                                                <p className="meta-data"><span><img src="images/svg-icons/like.svg" alt="icon"/> 3</span> <span><img src="images/svg-icons/dislike.svg" alt="icon"/> 1</span> <span><img src="images/svg-icons/love-icon.svg" alt="icon"/> REPLY</span></p>
                                            </div>
                                        </div>
                                        <div className="single-comment">
                                            <img src="images/user.jpg" alt="Smith"/>
                                            <div className="comment-content">
                                                <p><b>Robert Smith</b> <span className="ms-5 text-muted fs-6">1 day ago</span></p>
                                                <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
                                                <p className="meta-data"><span><img src="images/svg-icons/like.svg" alt="icon"/> 3</span> <span><img src="images/svg-icons/dislike.svg" alt="icon"/> 1</span> <span><img src="images/svg-icons/love-icon.svg" alt="icon"/> REPLY</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 mt-4 mt-xl-0">
                                <SidebarWidget/>
                            </div>
                        </div>
                    </div>
                </div>
                <AdsBanner/>
                <RelatedBlogs/>
            </main>
            <Footer/>
        </>
    )
}

export default Home6;