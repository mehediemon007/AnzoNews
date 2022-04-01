import React,{useState} from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignUp = () => {

    const [signUpKey, setSignUp] = useState("phone");
    const [signUpData ,setData] = useState({
        "mail":"",
        "phone":"",
        "password":""
    })

    const schema = yup.object().shape({
        phone: yup.number().required(),
        password: yup.string().required("Must Be 8 Characters").min(8),
    })

    const emailSchema = yup.object().shape({
        email: yup.string().required("Enter Valid Email").email(),
        password: yup.string().required("Must Be 8 Characters").min(8),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(signUpKey === "phone" ? schema : emailSchema),
    });

    const inputChange = (e) =>{
        setData({
            ...signUpData,
            [e.target.name] : e.target.value
        })
    }

    const handleSignUp = (e) => {

        e.preventDefault();
        setData({
            mail:"",
            password:"",
            phone:""
        })
    };

    return (
        <>
            <div className="an-sign-up">
                <Tabs className="tabs sign-up-options" id="controlled-tab-example" activeKey={signUpKey} onSelect={(k) => setSignUp(k)}>
                    <Tab eventKey="phone" title={<span><i className="uil uil-mobile-android"></i> Phone</span>} className=''>
                        <form className="sign-with-phone show" onSubmit={handleSignUp}>
                            <fieldset className="an-input">
                                <label htmlFor="user-phone" className="visually-hidden"></label>
                                <input type="tel" value={signUpData.phone} placeholder="Phone No." id="user-phone" name='phone' onChange={(e) => inputChange(e)}/>
                            </fieldset>
                            <p className='err-msg'>{errors["phone"]?.message}</p>
                            <fieldset className="an-input position-relative mt-4">
                                    <label htmlFor="user-password" className="visually-hidden"></label>
                                    <input type="text" value={signUpData.password} placeholder="Password" id="user-password" name='password' onChange={(e) => inputChange(e)}/>
                                    <div className="pass-input">
                                        <i className="uil uil-eye"></i>
                                    </div>
                            </fieldset>
                            <p className='err-msg'>{errors["password"]?.message}</p>
                            <fieldset className="policy-checkbox mt-4">
                                <input type="checkbox" id="policy-check"/>
                                <label htmlFor="policy-check">I agree to angoods.com terms of Use and privacy policy</label>
                            </fieldset>
                            <button type="submit" className="log-btn">Sign Up</button>
                        </form>
                    </Tab>
                    <Tab eventKey="email" title={<span><i className="uil uil-envelope"></i> Email</span>} className=''>
                        <form className="sign-with-mail" onSubmit={handleSignUp}>
                            <fieldset className="an-input">
                                <label htmlFor="user-mail" className="visually-hidden"></label>
                                <input type="email" value={signUpData.mail} placeholder="Email" id="user-mail" name='mail' onChange={(e) => inputChange(e)}/>
                            </fieldset>
                            <p className='err-msg'>{errors["email"]?.message}</p>
                            <fieldset className="an-input position-relative mt-4">
                                    <label htmlFor="user-mail-pass" className="visually-hidden"></label>
                                    <input type="text" value={signUpData.password} placeholder="Password" id="user-mail-pass" name='password' onChange={(e) => inputChange(e)}/>
                                    <div className="pass-input">
                                        <i className="uil uil-eye"></i>
                                    </div>
                            </fieldset>
                            <p className='err-msg'>{errors["password"]?.message}</p>
                            <fieldset className="policy-checkbox mt-4">
                                <input type="checkbox" id="policy-check-mail"/>
                                <label htmlFor="policy-check-mail">I agree to angoods.com terms of Use and privacy policy</label>
                            </fieldset>
                            <button type="submit" className="log-btn">Sign Up</button>
                        </form>
                    </Tab>
                </Tabs>
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

export default SignUp