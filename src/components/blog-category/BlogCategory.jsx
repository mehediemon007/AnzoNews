import React from 'react';
import catData from "../../apis/tech-category";
import {Link} from "react-router-dom"

function BlogCategory() {
  return (
    <>
        <div className="an-blog-category sec-spacer-80 pb-0">
            <div className="container">
                <div className="row">
                    {catData.map((cat,index)=>(
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <a href="/category-list" className="more-a"><h4 className="mb-4">{cat.category} <i className="uil uil-angle-right-b"></i></h4></a>
                            <div className="blog-list mb-2">
                                <div className="single-blog">
                                    <img src={`images/blogs/${cat.image}`} alt={cat.alt}/>
                                    <a to="/category-list"><h4 className="blog-title">{cat.title}</h4></a>
                                </div>
                                {cat.subBlog.map((blog,index) => (
                                    <div className="single-blog" key={index}>
                                        <a href="#">{blog}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCategory;