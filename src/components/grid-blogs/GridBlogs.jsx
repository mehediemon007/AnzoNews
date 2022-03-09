import React,{useState} from 'react'
import blogs from "../../apis/grid-catagory";
import SingleBlog from './single-blog/SingleBlog';

function GridBlogs() {

    const [noOfBlog, setBlogNum] = useState(18);

    function loadMore(e){
        setBlogNum(noOfBlog + 3);
    }

    const slice = blogs.slice(0,noOfBlog);

    return (
        <>
            <h2 className="mb-3">Categories</h2>
            <div className="blog-category blog-three-col">
                {slice.map(blog => <SingleBlog blog={blog} key={blog.id}/>)}
            </div>
            <div className="text-center">
                <button className="view-more-btn" onClick={loadMore}>View More <i className="uil uil-arrow-circle-right"></i></button>
            </div>
        </>
    )
}

export default GridBlogs;