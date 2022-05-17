import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Newpass = () => {

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/")
    }

    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="container">
                    <div class="an-sign">
                        <div class="an-log-form">
                        <div class="an-pass-recover">
                                <h5 class="mb-5 text-center">Forgot your Password</h5>
                                <form class="sign-with-phone show" onSubmit={(e)=> handleSubmit(e)}>
                                    <fieldset class="an-input position-relative mb-4">
                                        <label htmlFor="user-pass" class="visually-hidden"></label>
                                        <input type="password" placeholder="New Password" id="user-pass"/>
                                    </fieldset>
                                    <fieldset class="an-input position-relative mb-4">
                                        <label htmlFor="confirm-pass" class="visually-hidden"></label>
                                        <input type="password" placeholder="Confirm Password" id="confirm-pass"/>
                                    </fieldset>
                                    <button type="submit" class="log-btn mb-0">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Newpass