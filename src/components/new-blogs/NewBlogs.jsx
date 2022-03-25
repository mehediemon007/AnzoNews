import React,{useState} from 'react';
import blogData from "../../apis/headphone";
import { Tabs, Tab } from "react-bootstrap";
import BlogsTab from './BlogsTab';

const NewBlogs = () => {

    const {latestBlogs, trendingBlogs, popularBlogs } = blogData.newBlogs;

    const [key, setKey] = useState("latest");

    return (
        <>
            <div className="an-new-blogs">
            <div className="container">
                <div className="row">
                <div className="col-xl-9 col-md-7 col-lg-8">
                    <div className="new-blogs">
                        <div className="tab-heading">
                            <h4>WHAT’S NEW</h4>
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
                        </div>
                        <Tabs className="tabs" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Tab eventKey="latest" title="Charts">
                                <BlogsTab blogs={latestBlogs}/>
                            </Tab>
                            <Tab eventKey="trending" title="Trending">
                                <BlogsTab blogs={trendingBlogs}/>
                            </Tab>
                            <Tab eventKey="Popular" title="Popular">
                                <BlogsTab blogs={popularBlogs}/>
                            </Tab>
                        </Tabs>
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
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default NewBlogs;