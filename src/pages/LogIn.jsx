import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SignIn from '../components/auth/SignIn';
import SignTab from '../components/auth/SignTab';

const LogIn = () => {
    return (
        <>
            <Header/>
            <mian className="an-main-content">
                <div className="container">
                    {/* <SignIn/> */}
                    <SignTab/>
                </div>
            </mian>
            <Footer/>
        </>
    )
}

export default LogIn