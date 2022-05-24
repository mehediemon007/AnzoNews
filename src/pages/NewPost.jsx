import React,{useState} from 'react';
import Footer from '../components/footer/Footer';
// import AdsBanner from '../components/adsbanner/AdsBanner';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import {Link} from "react-router-dom";
import {addPost} from '../redux/actions';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';

const NewPost = () => {

    const dispatch = useDispatch();

    const [post , setPost] = useState({
        image: "",
        title: "",
        des:""
    })

    const imageChange = (e) =>{
        if(e.target.files && e.target.files.length > 0){
            setPost({
                ...post,
                image : e.target.files[0]
            })
        }
    }

    const handlePost = (e) =>{
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    }

    const notify = (msg) =>{
        toast.success(msg);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addPost(post))
        notify("New Post Added!")
        // navigate("/")
    }

    return (
        <>
            <header className="an-header">
                <Toolbar/>
                <Navbar/>
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
                                            <form className="an-add-post" onSubmit={(e)=>handleSubmit(e)}>
                                                <div className="post-pic">
                                                    <div className="uploaded-image">
                                                        <img className="profile-pic" src={post.image ? URL.createObjectURL(post.image) : `images/upload.png`} alt="John"/>
                                                    </div>
                                                    <div className="uplaod-image">
                                                        <label className="upload-button" htmlFor="img-upload">Upload Image</label>
                                                        <input className="file-upload d-none" id='img-upload' type="file" accept="image/*" onChange={(e)=> imageChange(e)}/>
                                                    </div>
                                                </div>
                                                <div className="post-content">
                                                    <fieldset className="an-info-input my-4">
                                                        <h4>Title</h4>
                                                        <label htmlFor="post-title" className="visually-hidden">Title</label>
                                                        <input type="text" id="post-title" placeholder="Post Title" name="title" onChange={(e)=>handlePost(e)}/>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <h4>Description</h4>
                                                        <label htmlFor="post-des" className="visually-hidden">Description</label>
                                                        <textarea id="post-des" placeholder="Post Description" name='des' onChange={(e)=>handlePost(e)}></textarea>
                                                    </fieldset>
                                                </div>
                                                <button type="submit" className="upload-button" onClick={(e)=>handleSubmit(e)}>Add Post</button>
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