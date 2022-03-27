import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import RelatedBlogs from '../components/related-blogs/RelatedBlogs';
import SidebarWidget from '../components/sidebar/SidebarWidget';

function Home6() {
    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="an-news mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9">

                            </div>
                            <div className="col-xl-3 mt-4 mt-xl-0">
                                <SidebarWidget/>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedBlogs/>
            </main>
            <Footer/>
        </>
    )
}

export default Home6