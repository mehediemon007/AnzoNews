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
                                            <form class="otp-with-phone show" onSubmit={(e)=> handleSubmit(e)}>
                                                <div class="otp-number py-3 p-sm-4">
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                </div>
                                                <button type="submit" class="log-btn m-0">Submit</button>
                                            </form>
                                        </Tab>
                                        <Tab eventKey="email" title="Email" className=''>
                                            <div class="otp-source">
                                                <span>Email.</span>
                                                <p>xxxxx@gmail.com</p>
                                            </div>
                                            <form class="otp-with-mail" onSubmit={(e)=> handleSubmit(e)}>
                                                <div class="otp-number py-3 p-sm-4">
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                    <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                                                </div>
                                                <button type="submit" class="log-btn m-0">Submit</button>
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