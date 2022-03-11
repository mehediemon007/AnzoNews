import React,{useState} from 'react'
import blogs from "../../apis/grid-catagory";
import SingleBlog from './single-blog/SingleBlog';

function GridBlogs() {

    const [noOfBlog, setBlogNum] = useState(18);
    const [clicked,setClicked] = useState(false);

    function loadMore(e){
        e.preventDefault();
        setClicked(true);
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
            {noOfBlog < blogs.length && <a href='#' className="view-more-btn" onClick={loadMore}>View More <i className={`uil ${clicked ? "uil-arrow-circle-down" : "uil-arrow-circle-right"}`}></i></a>}
            </div>
        </>
    )
}

export default GridBlogs;