import React from 'react'
import Footer from '../components/footer/Footer';
import GridBlogs from '../components/grid-blogs/GridBlogs';
import Header from '../components/header/Header';
import SidebarWidget from '../components/sidebar/SidebarWidget';

function CategoryGridThree() {
  return (
    <>  
        <Header/>
        <main className="an-main-content">
            <div className="an-category">
                <div className="container">
                    <div className="an-breadcrumb my-2 text-end">
                        <a href="index.html" className="breadcrumb-link">Home</a>
                        <a href="#" className="breadcrumb-link active">Category</a>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="an-mian-sec pb-80">
                                <GridBlogs/>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-5 mb-xl-0">
                            <SidebarWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default CategoryGridThree;