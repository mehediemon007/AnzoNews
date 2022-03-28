import React from 'react'
import Header from '../components/header/Header';
import ListBlogs from "../components/list-blogs/ListBlogs";
import SidebarWidget from '../components/sidebar/SidebarWidget'

const CategoryList = () => {
    return (
        <>
            <Header/>
            <main className="an-main-content">
                <div className="an-category">
                    <div className="container">
                        <div class="an-breadcrumb my-2 text-end">
                            <a href="index.html" class="breadcrumb-link">Home</a>
                            <a href="#" class="breadcrumb-link active">Category</a>
                        </div>
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="an-main-sec pb-80">
                                    <ListBlogs/>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <SidebarWidget/>
                            </div>  
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CategoryList