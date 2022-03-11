import React,{useState} from 'react';
import data from "../../apis/like-post";

function LikedPost() {

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
                    <a href="#" className="more-link">More <i class="uil uil-angle-right-b"></i></a>
                </div>
                <div className="row recommended-blog">
                    {data.slice(0,noOfBlog).map(blog => (
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog">
                                <div class="blog-image">
                                    <a href="#"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></a>
                                </div>
                                <div class="blog-content bg-white">
                                    <a href="blog-details.html"><h3 class="blog-title">{blog.title}</h3></a>
                                    <p class="meta-data mt-3"><span><img src="images/cmnt-user.jpg" alt="user-avatar" class="rounded-circle"/> {blog.name}</span><span><img src="images/calendar-ylo.png" alt="Calendar Avatar"/> {blog.date}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    {noOfBlog < data.length && <a href='#' className="view-more-btn" onClick={loadMore}>View More <i className={`uil ${clicked ? "uil-arrow-circle-down" : "uil-arrow-circle-right"}`}></i></a>}
                </div>
            </div>
        </div>
    </>
  )
}

export default LikedPost;