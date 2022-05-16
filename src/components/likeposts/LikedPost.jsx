import React,{useState} from 'react';
import Data from "../../apis/like-post";
import {Link} from "react-router-dom"

function LikedPost() {

    const {likedPosts} = Data;

    const [noOfBlog, setBlogNum] = useState(9);
    const [clicked,setClicked] = useState(false);

    function loadMore(e){
        e.preventDefault();
        setClicked(true);
        setBlogNum(noOfBlog + 3);
    }

  return (
    <>
        <div className="an-recommended-blog sec-spacer-80">
            <div className="container">
                <div className="sec-heading d-flex justify-content-between align-items-center mb-4">
                    <h4>YOU MAY LIKE</h4>
                    <Link to="/category-three-grid" className="more-link">More <i className="uil uil-angle-right-b"></i></Link>
                </div>
                <div className="row recommended-blog">
                    {likedPosts.slice(0,noOfBlog).map((blog,index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/blog-details"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></Link>
                                </div>
                                <div className="blog-content bg-white">
                                    <Link to="/blog-details"><h3 className="blog-title">{blog.title}</h3></Link>
                                    <p className="meta-data mt-3"><span><img src="images/cmnt-user.jpg" alt="user-avatar" className="rounded-circle"/> {blog.name}</span><span><img src="images/calendar-ylo.png" alt="Calendar Avatar"/> {blog.date}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    {noOfBlog < likedPosts.length && <a href='#' className="view-more-btn" onClick={loadMore}>View More <i className={`uil ${clicked ? "uil-arrow-circle-down" : "uil-arrow-circle-right"}`}></i></a>}
                </div>
            </div>
        </div>
    </>
  )
}

export default LikedPost;