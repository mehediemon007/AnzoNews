import React,{useContext, useEffect, useState} from 'react';
import Footer from '../components/footer/Footer';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import { LangContext } from '../context/LangContext';
import {Link} from "react-router-dom";
// import { SRLWrapper } from "simple-react-lightbox";
import data from '../apis/headphone';

const ImageGallery = () => {

    const [images,setImages] = useState([]);

    const {langShow , setLangShow} = useContext(LangContext);

    useEffect(()=>{

        setImages(data.newBlogs.featureNews)

    },[])

    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <Navbar  langProps={{langShow, setLangShow}}/>
            </header>
            <div className="an-ads py-4">
                <div className="container">
                    <div className="row px-lg-5">
                        <img src="images/ads-banner.jpg" alt="Ads Banner"/>
                    </div>
                </div>
            </div>
            <main className="an-main-content">
                <div className="an-image-gallery pb-5">
                    <div className="container">
                        <div className="row g-2 g-sm-3">
                            {images.filter(image => image.postType === 'image').map(image => (

                                <div className="col-6 col-sm-4" key={image.id}>
                                    <a href={`/images/blogs/${image.image}`} className="single-image"><img src={`/images/blogs/${image.image}`} alt={image.alt}/></a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default ImageGallery;