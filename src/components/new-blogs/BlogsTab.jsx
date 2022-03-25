import React from 'react'

const BlogsTab = (props) => {

    const blogs = props.blogs;

    return (
        <div className="row">
            <div className="col-xl-7">
                <div className="single-blog overlay-blog">
                    <div className="blog-image rounded-2">
                        <img src={`images/blogs/${blogs[0].image}`} alt={blogs[0].alt} style={{height: 450}}/>
                        <div className="image-overlay"></div>
                    </div>
                    <div className="blog-content">
                        <span className="bg-danger tag">{blogs[0].tag}</span>
                        <a href="#"><h3 className="blog-title text-white">{blogs[0].title}</h3></a>
                        <p className="blog-date mt-2"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {blogs[0].date}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 hoz-blog mt-4 mt-xl-0">
                {blogs.slice(1).map((blog) => (
                    <div className="single-blog mb-4" key={blog.id}>
                        <div className="blog-image">
                            <a href="#"><img src={`images/blogs/${blog.image}`} alt={blog.alt}/></a>
                        </div>
                        <div className="blog-content bg-white py-3">
                            <a href="#"><h5 className="blog-title">{blog.title}</h5></a>
                            <a href="#"><p className="blog-date mt-1"><img src="images/man-avatar.png" alt="user-avatar"/> {blog.name}</p></a>
                            <p className="blog-date mt-1"><img src="images/clock-avatar.png" alt="Clock Avatar"/> {blog.date}</p>
                        </div>
                    </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsTab;