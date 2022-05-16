import React,{useContext} from 'react'
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import {Link} from "react-router-dom";
import { LangContext } from '../../context/LangContext';

function Header() {

    const {langShow , setLangShow} = useContext(LangContext);
    
    // const langFlag = useRef();
    
    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
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
                <Navbar langProps={{langShow, setLangShow}}/>
            </header>
        </>
    )
}

export default Header;