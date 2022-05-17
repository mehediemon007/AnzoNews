import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {oldUser} from "../../redux/actions";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    let navigate = useNavigate();

    const [signData , setData ] = useState({
        "user":"",
        password:""
    })

    const userData = useSelector(state => state.signIn);
    
    let dispatch = useDispatch();

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(oldUser(signData));
        setData({
            "user":"",
            "password":""
        });

        navigate("/profile")
    }

    return (
        <>
            <div className="an-sign-in mt-40">
                <form className="sign-in-form" onSubmit={handleSignIn}>
                    <fieldset className="an-input mb-4">
                        <label htmlFor="user-id" className="visually-hidden"></label>
                        <input type="text" value={signData.user} placeholder="Email / Phone No" id="user-id" name='user' onChange={(e)=> setData({...signData, user: e.target.value})}/>
                    </fieldset>
                    <fieldset className="an-input position-relative">
                        <label htmlFor="user-pass" className="visually-hidden"></label>
                        <input type="text" value={signData.password} placeholder="Password" id="user-pass" name='password' onChange={(e)=> setData({...signData, password: e.target.value})}/>
                        {/* <div className="pass-input">
                                <i className="uil uil-eye"></i>
                        </div> */}
                    </fieldset>
                    <button type="submit" className="log-btn">Login</button>
                </form>
                <p className="text-center mt-2"><Link to="/forget-password">Forgot your Password?</Link></p>
                <div className="social-login text-center">
                    <p className="my-3 light-color">Quick Access With</p>
                    <div className="social-login-links">
                        <a href="https://appleid.apple.com/" className="me-3"><img src="images/apple-2.png" alt="apple store"/></a>
                        <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="me-3"><img src="images/google-2.png" alt="google"/></a>
                        <a href="https://www.facebook.com/"><img src="images/fb-2.png" alt="facebook"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn