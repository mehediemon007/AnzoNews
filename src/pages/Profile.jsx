import React,{useContext, useState} from 'react';
import {Link} from "react-router-dom";
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Footer from '../components/footer/Footer';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import { LangContext } from '../context/LangContext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {editUser} from '../redux/actions';
import {toast} from 'react-toastify';

const Profile = () => {

    let dispatch = useDispatch()


    const {langShow , setLangShow} = useContext(LangContext);

    const {user, userAuth} = useSelector(state => state.user);

    const [userData, setUser] = useState({

        image:"",
        userName: "",
        phone:"",
        mail:"",
        password:"",
        rePass:"",
        gender:"",
        education:"",
        industry:""

    })

    const imageChange = (e) =>{
        if(e.target.files && e.target.files.length > 0){
            setUser({
                ...userData,
                image : e.target.files[0]
            })
        }
    }

    const handleChange = (e) =>{

        setUser({
            ...userData,
            [e.target.name] : e.target.value
        })
    }

    const handlePass = (e) =>{
        e.preventDefault();
        delete userData["rePass"];
        dispatch(editUser(userData));
        notify("Change Saved!")
    }

    const handleSave = (e) =>{
        
        delete userData["password"];
        delete userData["rePass"];
        e.preventDefault();
        dispatch(editUser(userData));
        notify("Change Saved!!")
    }

    const notify = (msg) =>{
        toast.success(msg);
    }

    useEffect(()=>{

        if(userData.password === ""){
            
            setUser({
                ...userData,
                password: userAuth?.password
            })
        }

    },[user,userAuth])

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
                <div className="an-account-info">
                    <div className="container">
                        <div className="an-breadcrumb mb-4 text-end">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <Link to="/profile" className="breadcrumb-link active">Profile</Link>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <ProfileSidebar/>
                            </div>
                            <div className="col-lg-9">
                                <div className="an-main-sec mb-5 p-4 bg-white">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="customer-pic text-center mb-4 mb-sm-0">
                                                <div className="circle">
                                                    <img className="profile-pic" src={userData.image ? URL.createObjectURL(userData.image) : `images/customer-pic.jpg`} alt="Profile Pic"/>
                                                </div>
                                                <div className="p-image">
                                                    <label htmlFor='img-upload' className="upload-button">Upload Avatar</label>
                                                    <input className="file-upload d-none" id='img-upload' type="file" accept="image/*" onChange={(e)=>imageChange(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="customer-info-setting pe-lg-5">
                                                <div>
                                                    <h5 className="mb-4">Personal Information</h5>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Nickname</p>
                                                        <label htmlFor="user-name" className="visually-hidden">Nickname</label>
                                                        <input type="text" id="user-name" placeholder='Enter Name' value={userData.userName} name="userName" onChange={(e)=>handleChange(e)}/>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Gender</p>
                                                        <div>
                                                            <label htmlFor="male" className="me-3"><input type="radio" id="male" name="gender" value="Male" onChange={(e)=>handleChange(e)}/>Male</label>
                                                            <label htmlFor="female"><input type="radio" id="female" name="gender" value="Female" onChange={(e)=>handleChange(e)}/>Female</label>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Birthday</p>
                                                        <div>
                                                            <label htmlFor="birth" className="visually-hidden">Birth Day</label>
                                                            <input className="dateselector1" type="text" id="birth"/>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="mt-4">
                                                    <h6 className="mb-4">Security Information</h6>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">E-mail</p>
                                                        <label htmlFor="user-email" className="visually-hidden">E-mail</label>
                                                        <input type="email" id="user-email" placeholder='Enter E-mail' value={userData.mail} name="mail" onChange={(e)=>handleChange(e)}/>
                                                        <div className="text-end mt-4">
                                                            <button className="an-btn">Cancel</button>
                                                            <button className="an-btn an-primary-btn" onClick={(e)=> handleSave(e)}>Save</button>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Mobile Number</p>
                                                        <label htmlFor="user-phone" className="visually-hidden">Phone</label>
                                                        <input type="text" id="user-phone" placeholder="Please Set Now" name="phone" value={userData.phone} onChange={(e)=>handleChange(e)}/>
                                                        <label htmlFor="phone-verify" className="visually-hidden">Phone</label>
                                                        <input type="text" id="phone-verify" className="mt-4" placeholder="Verification Code" value={user.rePhone}/>
                                                        <div className="text-end mt-4">
                                                            <button className="an-btn">Cancel</button>
                                                            <button className="an-btn an-primary-btn" onClick={(e)=> handleSave(e)}>Save</button>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Password</p>
                                                        <label htmlFor="old-pass" className="visually-hidden">Password</label>
                                                        <input type="password" id="old-pass" name="password" placeholder="Old Password" value={userData.password} onChange={(e)=>handleChange(e)}/>
                                                        <label htmlFor="new-pass" className="visually-hidden">Password</label>
                                                        <input type="text" id="new-pass" className="mt-4" name="rePass" placeholder="New Password" value={userData.rePass} onChange={(e)=>handleChange(e)}/>
                                                        <div className="text-end mt-4">
                                                            <button className="an-btn">Cancel</button>
                                                            <button className="an-btn an-primary-btn" onClick={(e)=>handlePass(e)}>Change</button>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div>
                                                    <h6 className="mb-4">Others</h6>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Education</p>
                                                        <label htmlFor="education" className="visually-hidden">Education</label>
                                                        <input type="text" id="education" placeholder="Please Set Now" name='education' value={userData.education} onChange={(e)=>handleChange(e)}/>
                                                    </fieldset>
                                                    <fieldset className="an-info-input">
                                                        <p className="input-heading">Industry</p>
                                                        <label htmlFor="industry" className="visually-hidden">Industry</label>
                                                        <input type="text" id="industry" placeholder="Please Set Now" name="industry" value={userData.industry} onChange={(e)=>handleChange(e)}/>
                                                    </fieldset>
                                                    <div className="text-end mb-2">
                                                        <button className="an-btn">Cancel</button>
                                                        <button className="an-btn an-primary-btn" onClick={(e)=> handleSave(e)}>Save</button>
                                                    </div>
                                                </div>
                                            </div>
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

export default Profile