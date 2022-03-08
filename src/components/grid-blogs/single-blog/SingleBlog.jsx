import React from 'react'

function SingleBlog(blog) {

    const {image , title , name , date , description } = blog.blog;

    return (
        <div className="single-blog">
            <div className="blog-image">
                <a href="blog-details.html"><img src={`images/blogs/${image}`} alt="Boris Jonshon" className="rounded-0"/></a>
            </div>
            <div className="blog-content bg-white p-3">
                <a href="blog-details.html"><h5 className="blog-title">{title}</h5></a>
                <p className="meta-data my-3"><span><img src="images/man-avatar.png" alt="user-avatar"/> {name}</span><span><img src="images/calendar.png" alt="Calendar Avatar"/> {date}</span></p>
                <p>{description} </p>
            </div>
        </div>
    )
}

export default SingleBlog;