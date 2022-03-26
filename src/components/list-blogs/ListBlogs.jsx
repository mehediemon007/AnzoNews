import React,{useState} from 'react'
import blogs from "../../apis/grid-catagory";
import SingleBlog from './SingleBlog';

function GridBlogs() {

    const [noOfBlog, setBlogNum] = useState(7);
    const [clicked,setClicked] = useState(false);

    function loadMore(e){
        e.preventDefault();
        setClicked(true);
        setBlogNum(noOfBlog + 2);
    }

    const slice = blogs["listBlogs"].slice(0,noOfBlog);

    return (
        <>
            <h2 class="mb-3">Category</h2>
            <div className="blog-category-list">
                {slice.map((blog,index) => <SingleBlog blog={blog} key={index}/>)}
            </div>
            <div className="text-center">
                {noOfBlog < blogs["listBlogs"].length && <a href='#' className="view-more-btn" onClick={loadMore}>View More <i className={`uil ${clicked ? "uil-arrow-circle-down" : "uil-arrow-circle-right"}`}></i></a>}
            </div>
        </>
    )
}

export default GridBlogs;