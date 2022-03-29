import React from 'react';
import {Link} from "react-router-dom"

function SingleBlog(props) {

    const {image , title , name , date , description } = props.blog;

    return (
        <div className="single-blog">
            <div className="blog-image">
                <Link to="/blog-details"><img src={`images/blogs/${image}`} alt="Boris Jonshon" className="rounded-0"/></Link>
            </div>
            <div className="blog-content bg-white p-3">
                <Link to="/blog-details"><h5 className="blog-title">{title}</h5></Link>
                <p className="meta-data my-3"><span><img src="images/man-avatar.png" alt="user-avatar"/> {name}</span><span><img src="images/calendar.png" alt="Calendar Avatar"/> {date}</span></p>
                <p>{description} </p>
            </div>
        </div>
    )
}

export default SingleBlog;