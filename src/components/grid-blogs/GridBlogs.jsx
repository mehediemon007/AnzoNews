import React from 'react'
import blogs from "../../apis/grid-catagory";
import SingleBlog from './single-blog/SingleBlog';

function GridBlogs() {

    return (
        <>
            <h2 className="mb-3">Categories</h2>
            <div className="blog-category blog-three-col">
                {blogs.map(blog => <SingleBlog blog={blog} key={blog.id}/>)}
            </div>
        </>
    )
}

export default GridBlogs;