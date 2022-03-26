import React from 'react'

const SingleBlog = (props) => {

    const {image , alt , title , name , date , des } = props.blog;

    return (
        <>
            <div class="single-blog bg-white">
                <div class="blog-list-view">
                    <div class="blog-image rounded-0"><a href="-details"><img src={`images/fashion/${image}`} alt={alt}/></a></div>
                    <div class="blog-content bg-white">
                        <a href="blog-details.html"><h4 class="blog-title overflow-title">{title}</h4></a>
                        <p class="meta-data my-3"><span><img src="images/man-avatar.png" alt="user-avatar"/> {name}</span><span><img src="images/calendar.png" alt="Calendar Avatar"/> {date}</span></p>
                        <p>{des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;