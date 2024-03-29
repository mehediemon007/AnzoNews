import React from 'react';
import {Link} from "react-router-dom";

const SingleBlog = (props) => {

    const {image , alt , title , name , date , des } = props.blog;

    return (
        <>
            <div className="single-blog bg-white">
                <div className="blog-list-view">
                    <div className="blog-image rounded-0"><Link to="/blog-details"><img src={`images/fashion/${image}`} alt={alt}/></Link></div>
                    <div className="blog-content bg-white">
                        <Link to="/blog-details"><h4 className="blog-title overflow-title">{title}</h4></Link>
                        <p className="meta-data my-3"><span><img src="images/man-avatar.png" alt="user-avatar"/> {name}</span><span><img src="images/calendar.png" alt="Calendar Avatar"/> {date}</span></p>
                        <p>{des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;