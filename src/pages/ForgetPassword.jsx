import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import ForgetPass from '../components/auth/ForgetPass';

const ForgetPassword = () => {
        return (
            <>
                <Header/>
                <main className="an-main-content">
                    <div className="container">
                        <ForgetPass/>
                    </div>
                </main>
                <Footer/>
            </>
        )
}

export default ForgetPassword