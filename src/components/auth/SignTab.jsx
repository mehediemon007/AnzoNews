import React,{useState} from 'react';
import { Tabs, Tab } from "react-bootstrap";

const SignTab = () => {

    const [key, setKey] = useState("signin");
    const [signUpKey, setSignUp] = useState("phone")

    return (
        <>
            <div className="an-sign">
                <div className="an-log-form">
                   <Tabs className="tabs log-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                        <Tab eventKey="signin" title="Sign In" className=''>
                            <div className="an-sign-in show mt-40">
                                <form className="sign-in-form">
                                    <fieldset className="an-input mb-4">
                                        <label for="user-id" className="visually-hidden"></label>
                                        <input type="text" placeholder="Email / Phone No" id="user-id"/>
                                    </fieldset>
                                    <fieldset className="an-input position-relative">
                                        <label for="user-pass" className="visually-hidden"></label>
                                        <input type="text" placeholder="Password" id="user-pass"/>
                                        <div className="pass-input">
                                                <i className="uil uil-eye"></i>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className="log-btn">Login</button>
                                </form>
                                <p className="text-center mt-2"><a href="forget-pass.html">Forgot your Password?</a></p>
                                <div className="social-login text-center">
                                    <p className="my-3 light-color">Quick Access With</p>
                                    <div className="social-login-links">
                                        <a href="https://appleid.apple.com/" className="me-3"><img src="images/apple-2.png" alt="apple store"/></a>
                                        <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="me-3"><img src="images/google-2.png" alt="google"/></a>
                                        <a href="https://www.facebook.com/"><img src="images/fb-2.png" alt="facebook"/></a>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="signup" title="Register" className=''>
                            <div className="an-sign-up">
                                <Tabs className="tabs sign-up-options" id="controlled-tab-example" activeKey={signUpKey} onSelect={(k) => setSignUp(k)}>
                                    <Tab eventKey="phone" title={<span><i class="uil uil-mobile-android"></i> Phone</span>} className=''>
                                        <form className="sign-with-phone show">
                                            <fieldset className="an-input mb-4">
                                                <label for="user-phone" className="visually-hidden"></label>
                                                <input type="text" placeholder="Phone No." id="user-phone"/>
                                            </fieldset>
                                            <fieldset className="an-input position-relative mb-4">
                                                    <label for="user-password" className="visually-hidden"></label>
                                                    <input type="text" placeholder="Password" id="user-password"/>
                                                    <div className="pass-input">
                                                        <i className="uil uil-eye"></i>
                                                    </div>
                                            </fieldset>
                                            <fieldset className="policy-checkbox mt-2">
                                                <input type="checkbox" id="policy-check"/>
                                                <label for="policy-check">I agree to angoods.com terms of Use and privacy policy</label>
                                            </fieldset>
                                            <button type="submit" className="log-btn">Sign Up</button>
                                        </form>
                                    </Tab>
                                    <Tab eventKey="email" title={<span><i class="uil uil-envelope"></i> Email</span>} className=''>
                                        <form className="sign-with-mail">
                                            <fieldset className="an-input mb-4">
                                                <label for="user-mail" className="visually-hidden"></label>
                                                <input type="text" placeholder="Email" id="user-mail"/>
                                            </fieldset>
                                            <fieldset className="an-input position-relative mb-4">
                                                    <label for="user-mail-pass" className="visually-hidden"></label>
                                                    <input type="text" placeholder="Password" id="user-mail-pass"/>
                                                    <div className="pass-input">
                                                        <i className="uil uil-eye"></i>
                                                    </div>
                                            </fieldset>
                                            <fieldset className="policy-checkbox mt-2">
                                                <input type="checkbox" id="policy-check-mail"/>
                                                <label for="policy-check-mail">I agree to angoods.com terms of Use and privacy policy</label>
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
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default SignTab