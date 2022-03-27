import React from 'react';
import Data from "../../apis/like-post";

const RelatedBlogs = () => {

    const relatedBlogs = Data.relatedPosts;

    return (
        <>
            <div className="an-related-blogs sec-spacer-80 pt-0">
                <div className="container">
                    <h4 className="mb-4">Most Related News</h4>
                    <div className="row">
                        {relatedBlogs.map((blog,index) =>(
                            <div className="col-xl-4 col-md-6" key={index}>
                                <div className="single-blog mb-4">
                                    <div className="blog-image">
                                        <a href="#"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></a>
                                    </div>
                                    <div className="blog-content bg-white">
                                        <a href="blog-details.html"><h4 className="blog-title overflow-title">{blog.title}</h4></a>
                                        <p className="meta-data my-3"><span><img src="images/cmnt-user.jpg" alt="user-avatar" className="rounded-circle"/> {blog.name}</span><span><img src="images/calendar-ylo.png" alt="Calendar Avatar"/> {blog.date}</span></p>
                                        <p>{blog.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedBlogs