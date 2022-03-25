import React from 'react';
import blogData from "../../apis/headphone";
import BlogsTab from './BlogsTab';

const tab = () => {

    const {latestBlogs, trendingBlogs, popularBlogs } = blogData.newBlogs;

  return (
    <div>
        <ul className="nav news-tab-links" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="latest-tab" data-bs-toggle="tab" href="#latest" role="tab" aria-controls="latest" aria-selected="true">LATEST</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="trending-tab" data-bs-toggle="tab" href="#trending" role="tab" aria-controls="trending" aria-selected="false">TRENDING</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="Popular-tab" data-bs-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="false">POPULAR</a>
            </li>
        </ul>
        <div className="tab-content news-tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                <BlogsTab blogs={latestBlogs}/>
            </div>
            <div className="tab-pane fade" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                <BlogsTab blogs={trendingBlogs}/>
            </div>
            <div className="tab-pane fade" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                <BlogsTab blogs={popularBlogs}/>
            </div>
        </div>
    </div>
  )
}

export default tab