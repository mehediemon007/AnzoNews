import React,{useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const OTP = () => {

    const [key, setKey] = useState("phone");

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/new-pass")
    }

    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="container">
                    <div class="an-sign">
                        <div class="an-log-form">
                            <div class="an-pass-recover">
                                    <h5 class="mb-3 text-center">Forgot your Password</h5>
                                    <Tabs className="tabs log-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                                        <Tab eventKey="phone" title="Phone" className=''>
                                            <div class="otp-source">
                                                <span>Phone No.</span>
                                                <p>+880176XXXXXX</p>
                                            </div>
                                            <form className="sign-with-phone show" onSubmit={(e)=> handleSubmit(e)}>
                                                <fieldset className="an-input mb-4 position-relative">
                                                    <label htmlFor="user-phone" className="visually-hidden"></label>
                                                    <input type="password" placeholder="Phone No." id="user-phone"/>
                                                </fieldset>
                                                <button type="submit" className="log-btn mb-0">Send Request</button>
                                            </form>
                                        </Tab>
                                        <Tab eventKey="email" title="Email" className=''>
                                            <div class="otp-source">
                                                <span>Email.</span>
                                                <p>xxxxx@gmail.com</p>
                                            </div>
                                            <form className="sign-with-mail" onSubmit={(e)=> handleSubmit(e)}>
                                                <fieldset className="an-input mb-4 position-relative">
                                                    <label htmlFor="user-mail" className="visually-hidden"></label>
                                                    <input type="password" placeholder="Email" id="user-mail"/>
                                                </fieldset>
                                                <button type="submit" className="log-btn mb-0">Send Request</button>
                                            </form>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OTP