import React,{useState, useRef, useEffect,useContext} from 'react'
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import {Link} from "react-router-dom";
import { LangContext } from '../../context/LangContext';

function Header() {

    const {langShow , setLangShow, langChange} = useContext(LangContext);
    
    // const langFlag = useRef();

    // function langChange(){

    //     const lagnOpt = document.querySelectorAll(".single-lang");

    //     lagnOpt.forEach(el => {
    //         el.addEventListener("click",function(e){
                
    //             e.preventDefault();
    //             let logoSrc = el.querySelector(".flag").querySelector("img").getAttribute("src");
                
    //             if(this.classList.contains("arabic")){
    //                 document.body.classList.add('right-to-left');
    //             }else{
    //                 document.body.classList.remove('right-to-left');
    //             }

    //             // document.querySelector(".lang-switcher > .flag img").setAttribute("src",logoSrc);

    //             document.querySelectorAll(".lang-switcher > .flag img").forEach(el =>{
    //                 el.setAttribute("src",logoSrc)
    //             })

    //             // langFlag.current.setAttribute('src', logoSrc);
    //         })
    //     });
    // }

    // useEffect(()=>{
    //     langChange()
    // },[langShow]);

    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, langChange, setLangShow}}/>
                <div className="haeder-ads py-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <Link to="/"><img src="images/logo/logo.png" alt="logo"/></Link>
                            </div>
                            <div className="col-8">
                                <a href="#"><img src="images/ads-banner.jpg" alt="ads"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar langProps={{langShow, langChange, setLangShow}}/>
            </header>
        </>
    )
}

export default Header;