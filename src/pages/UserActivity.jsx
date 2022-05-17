import React,{useContext, useEffect, useState} from 'react';
import Footer from '../components/footer/Footer';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import { LangContext } from '../context/LangContext';
import {Link} from "react-router-dom";
import {activities as activityData} from "../apis/activities"

const UserActivity = () => {

    const [activities, setActivities] = useState(activityData);

    const {langShow , setLangShow} = useContext(LangContext);

    const delActivity = (e,id) =>{
        let filterData = activities.filter(activity => activity.id !== id);
        setActivities(filterData)
    }

    useEffect(()=>{

    },[activities])

    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <Navbar  langProps={{langShow, setLangShow}}/>
            </header>
            <div className="an-ads py-4">
                <div className="container">
                    <div className="row px-lg-5">
                        <img src="images/ads-banner.jpg" alt="Ads Banner"/>
                    </div>
                </div>
            </div>
            <main className="an-main-content">
                <div className="an-user-activity">
                    <div className="container">
                        <div className="an-breadcrumb mb-4 text-end">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <Link to="/activity" className="breadcrumb-link active">Activities</Link>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <ProfileSidebar/>
                            </div>
                            <div className="col-lg-9">
                                <div className="user-activities mb-50">
                                    <h3 className="mb-3">Activities</h3>
                                    {activities.map(activity=>(

                                        <div className="single-activity bg-white" key={activity.id}>
                                            <div className="post-img">
                                                <Link to="/blog-details"><img src={`images/news/${activity.image}`} alt={activity.alt}/></Link>
                                            </div>
                                            <div className="activity-content">
                                                <p className="meta-data my-2"><span><img src={`images/svg-icons/${activity.icon}`} alt={activity.activity}/> {activity.activity}</span><span><img src="images/svg-icons/clock.png" alt="Post Time"/> {activity.time}</span></p>
                                                <Link to="/blog-details"><h5 className="blog-title">{activity.title}</h5></Link>
                                                <div className="del-activity">
                                                    <i className="uil uil-ellipsis-v"></i>
                                                    <button className="del-log" onClick={(e)=>delActivity(e,activity.id)}><i className="uil uil-trash-alt"></i> Delete</button>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default UserActivity