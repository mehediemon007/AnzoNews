import React,{ useEffect, useContext} from 'react';
import OwlCarousel from 'react-owl-carousel';
import { LangContext } from '../../context/LangContext';

function Toolbar(props) {

    const {langData, setLang, handleLang} = useContext(LangContext);
    
    const {langShow , setLangShow} = props.langProps;

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

        <div className="an-toolbar primary-gradient py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="news-scroll">
                            <div className="breaking-title">
                                <p>BREAKING NEWS</p>
                            </div>
                            <OwlCarousel className="news-carousel owl-carousel" {...newsSliderOptions}>
                                <p className="text-white">phasellus odio purus consectetur in dignissim</p>
                                <p className="text-white">phasellus odio purus consectetur in dignissim</p>
                                <p className="text-white">phasellus odio purus consectetur in dignissim</p>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="row align-items-center">
                            <div className="col-7 text-lg-end">
                                <p className="fw-bold text-white"><i className="uil uil-clock-three"></i> Wednesday, January 19, 2022</p>
                            </div>
                            <div className="col-5">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="lang-switcher" onClick={()=> setLangShow(!langShow)}>
                                        <span className="flag">
                                            {langData.filter(lang => lang.selected === true).map(({img,alt})=><img src={`images/flags/${img}`} alt={alt} key={alt}/>)}
                                        </span>
                                        <span className="lang"><i className="uil uil-angle-down"></i></span>
                                        {/* <ul className={`lang-list ${langShow ? "lang-list-open" : ""}`}>
                                            <li className="single-lang"><span className="flag"><img src="images/flags/bd-flag.png" alt="bangladesh" /></span><a className="lang-text" href="#">BD</a></li>
                                            <li className="single-lang"><span className="flag"><img src="images/flags/usa-flag.png" alt="united-states" /></span><a className="lang-text" href="#">ENG</a></li>
                                            <li className="single-lang"><span className="flag"><img src="images/flags/china-flag.png" alt="china"/></span><a className="lang-text" href="#">CHN</a></li>
                                            <li className="single-lang arabic"><span className="flag"><img src="images/flags/saudi-flag.png" alt="spain"/></span><a className="lang-text" href="#">ARB</a></li>
                                            <li className="single-lang"><span className="flag"><img src="images/flags/german-flag.png" alt="german"/></span><a className="lang-text" href="#">GER</a></li>
                                        </ul> */}
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