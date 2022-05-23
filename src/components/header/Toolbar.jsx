import React,{useContext} from 'react';
import OwlCarousel from 'react-owl-carousel';
import { LangContext } from '../../context/LangContext';

function Toolbar(props) {

    const {langData, handleLang, langShow , setLangShow} = useContext(LangContext);
    
    const newsSliderOptions ={
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
        touchDrag  : false,
    }
    
    return (

        <div className={`an-toolbar py-2${!props.dark ? ' primary-gradient' : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="news-scroll">
                            <div className="breaking-title">
                                <p>BREAKING NEWS</p>
                            </div>
                            <OwlCarousel className="news-carousel" {...newsSliderOptions}>
                                <p className={`${!props.dark ? 'text-white' : 'text-yellow'}`}>phasellus odio purus consectetur in dignissim</p>
                                <p className={`${!props.dark ? 'text-white' : 'text-yellow'}`}>phasellus odio purus consectetur in dignissim</p>
                                <p className={`${!props.dark ? 'text-white' : 'text-yellow'}`}>phasellus odio purus consectetur in dignissim</p>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="row align-items-center">
                            <div className="col-7 text-lg-end">
                                <p className={`fw-bold ${!props.dark ? 'text-white' : 'text-yellow'}`}><i className="uil uil-clock-three"></i> Wednesday, January 19, 2022</p>
                            </div>
                            <div className="col-5">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="lang-switcher" onClick={()=> setLangShow(!langShow)}>
                                        <span className="flag">
                                            {langData.filter(lang => lang.selected === true).map(({img,alt})=><img src={`images/flags/${img}`} alt={alt} key={alt}/>)}
                                        </span>
                                        <span className="lang"><i className={`uil uil-angle-down ${props.dark ? 'text-yellow' : ''}`}></i></span>
                                        <ul className = {`lang-list ${langShow ? "lang-list-open" : ""}`}>
                                            {langData.map(el =>{
                                                return(
                                                    <li className="single-lang" key={el.langName} onClick={()=> handleLang(el)}><span className="flag"><img src={`images/flags/${el.img}`} alt={el.alt} /></span><a className="lang-text" href="#">{el.langName}</a></li>
                                                )
                                                
                                            })}
                                        </ul>
                                    </div>
                                    <div className="toolbar-social-links text-lg-end">
                                        <a href="https://www.facebook.com/akaaritbd/" className="social-link"><i className="uil uil-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/accounts/emailsignup/?hl=en" className="social-link"><i className="uil uil-instagram"></i></a>
                                        <a href="https://www.youtube.com/channel/UC5_zUqknHg0Trch7iSnYfyQ" className="social-link"><i className="uil uil-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;