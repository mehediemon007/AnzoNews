import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SignTab from '../components/auth/SignTab';

const LogIn = () => {
    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="container">
                    {/* <SignIn/> */}
                    <SignTab/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default LogIn