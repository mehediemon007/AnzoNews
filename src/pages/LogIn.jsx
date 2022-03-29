import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SignIn from '../components/auth/SignIn';

const LogIn = () => {
    return (
        <>
            <Header/>
            <mian className="an-main-content">
                <div className="container">
                    <SignIn/>
                </div>
            </mian>
            <Footer/>
        </>
    )
}

export default LogIn