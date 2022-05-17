import React,{useContext, useState} from 'react';
import Footer from '../components/footer/Footer';
import AdsBanner from '../components/adsbanner/AdsBanner';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import { LangContext } from '../context/LangContext';
import {Link} from "react-router-dom"

const NewPost = () => {

    const [selectedImage, setSelectedImage] = useState()

    const {langShow , setLangShow} = useContext(LangContext);

    const imageChange = (e) =>{
        if(e.target.files && e.target.files.length > 0){
            setSelectedImage(e.target.files[0])
        }
    }

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
                <div className="an-new-post">
                    <div className="container">
                        <div className="an-breadcrumb mb-4 text-end">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <Link to="/new-post" className="breadcrumb-link active">New Post</Link>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <ProfileSidebar/>
                            </div>
                            <div className="col-lg-9">
                                <div className="an-main-sec p-4 mb-50 bg-white">
                                    <div className="row">
                                        <div className="col-12">
                                            <form className="an-add-post">
                                                <div className="post-pic">
                                                    <div className="uploaded-image">
                                                        <img className="profile-pic" src={selectedImage ? URL.createObjectURL(selectedImage) : `images/upload.png`} alt="John"/>
                                                    </div>
                                                    <div className="uplaod-image">
                                                        <label className="upload-button" htmlFor="img-upload">Upload Image</label>
                                                        <input className="file-upload d-none" id='img-upload' type="file" accept="image/*" onChange={(e)=> imageChange(e)}/>
                                                    </div>
                                                </div>
                                                <div className="post-content">
                                                    <fieldset className="an-info-input my-4">
                                                        <h4>Title</h4>
                                                        <label htmlFor="post-title" className="visually-hidden">Password</label>
                                                        <input type="text" id="post-title" part="Post Title"/>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <h4>Description</h4>
                                                        <label htmlFor="post-des" className="visually-hidden">Description</label>
                                                        <textarea id="post-des" placeholder="Post Description"></textarea>
                                                    </fieldset>
                                                </div>
                                                <button type="submit" className="upload-button">Add Post</button>
                                            </form>
                                        </div>
                                    </div>
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

export default NewPost;