import React,{useState} from 'react';
import blogData from "../../apis/headphone";
import { Tabs, Tab } from "react-bootstrap";
import BlogsTab from './BlogsTab';
import VoteWidget from '../sidebar/vote-widget/VoteWidget';


const NewBlogs = (props) => {
    
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
                                <Tabs className="tabs news-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                                    <Tab eventKey="latest" title="LATEST" className='news-tab-content'>
                                        <BlogsTab blogs={latestBlogs}/>
                                    </Tab>
                                    <Tab eventKey="trending" title="TRENDING" className='news-tab-content'>
                                        <BlogsTab blogs={trendingBlogs}/>
                                    </Tab>
                                    <Tab eventKey="Popular" title="POPULAR" className='news-tab-content'>
                                        <BlogsTab blogs={popularBlogs}/>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-5 col-lg-4">
                        <h3 className="my-4 mt-md-0">Online Vote</h3>
                        <VoteWidget/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default NewBlogs;