import React from 'react'

const Headphone = (props) => {

    const {image,alt,title,des,name,date} = props.blog;

    return (
        <>
            <div className="single-blog mb-3">
                <div className="row align-items-center align-items-lg-start">
                    <div className="col-4">
                        <div className="blog-image rounded-2">
                            <a href="#"><img src={`images/blogs/${image}`} alt={alt}/></a>
                        </div>
                    </div>
                    <div className="col-8 p-0">
                        <div className="blog-content p-0">
                            <a href="#"><h5 className="blog-title overflow-title">{title}</h5></a>
                            <p className="blog-date mt-2 mt-lg-0 mt-xl-2">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headphone;