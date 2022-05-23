import React,{useContext} from 'react'
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import {Link} from "react-router-dom";
import { LangContext } from '../../context/LangContext';

function Header() {

    const {langShow , setLangShow} = useContext(LangContext);

    return (
        <>
            <header className="an-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <div className="haeder-ads py-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <Link to="/"><img src="images/ads-banner.jpg" alt="ads"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </header>
        </>
    )
}

export default Header;