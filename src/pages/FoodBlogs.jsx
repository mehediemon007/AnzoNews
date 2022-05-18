import React,{useContext, useState} from 'react';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { LangContext } from '../context/LangContext';

const FoodBlogs = () => {

    const {langShow , setLangShow} = useContext(LangContext);

    return (
        <>
            <header className="an-header an-food-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <Navbar  langProps={{langShow, setLangShow}}/>
            </header>
            <main className="an-main-content bg-food">

            </main>
            <Footer/>
        </>
    )
}

export default FoodBlogs