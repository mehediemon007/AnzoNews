import React,{useState} from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {

    const [key, setKey] = useState("phone");

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/otp")
    }

    return (
        <>
            <div className="an-sign">
                <div className="an-log-form">
                   <div className="an-pass-recover">
                        <h5 className="mb-3 text-center">Forgot your Password</h5>

                        <Tabs className="tabs log-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Tab eventKey="phone" title="Phone" className=''>
                                <p className="mb-3">Please enter the account that you want to reset the password</p>
                                <form className="sign-with-phone show" onSubmit={(e)=> handleSubmit(e)}>
                                    <fieldset className="an-input mb-4 position-relative">
                                        <label htmlFor="user-phone" className="visually-hidden"></label>
                                        <input type="password" placeholder="Phone No." id="user-phone"/>
                                    </fieldset>
                                    <button type="submit" className="log-btn mb-0">Send Request</button>
                                </form>
                            </Tab>
                            <Tab eventKey="email" title="Email" className=''>
                                <p className="mb-3">Please enter the account that you want to reset the password</p>
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
        </>
    )
}

export default ForgetPass