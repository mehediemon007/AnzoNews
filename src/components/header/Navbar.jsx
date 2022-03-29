import React,{useEffect, useState, useContext} from 'react';
import {NavLink , Link} from "react-router-dom";
import { ThemeContext, themes } from '../../context/ThemeContext';

function Navbar() {

    const {theme, changeTheme} = useContext(ThemeContext);

    const [darkMode, setMode] = useState(false);

    // const [theme , setTheme] = useState(false);

    // const changeTheme = () =>{
    //     setTheme(!theme);
    // }

    // useEffect(()=>{
    //     if(theme){
    //         document.body.classList.add("dark-theme")
    //     }else{
    //         document.body.classList.remove("dark-theme")
    //     }
    // },[theme])

    return (
        <>
            <div className="an-nav bg-white">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                        <div className="nav-meta-icon nav-toggle d-lg-none">
                            <i className="uil uil-bars"></i>
                        </div>
                        <nav className="an-main-nav">
                            <ul className="nav-menu d-lg-flex align-items-center">
                                <li><NavLink to="/" className="nav-active">Home</NavLink></li>
                                <li className="has-children"><NavLink to="/category-three-grid"><span>Tech</span><i className="uil uil-angle-down"></i></NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/category-list">News Category 1</NavLink></li>
                                        <li><NavLink to="/category-list">News Category 2</NavLink></li>
                                        <li className="has-children"><NavLink to="/category-list">News Category 3 <i className="uil uil-angle-right d-none d-lg-inline-block"></i><i className="uil uil-angle-down d-lg-none"></i></NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink to="/category-list">News Category 1</NavLink></li>
                                                <li><NavLink to="/category-list">News Category 2</NavLink></li>
                                                <li className="border-bottom-0"><NavLink to="/category-list">News Category 6</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/category-three-grid">News Category 4</NavLink></li>
                                        <li><NavLink to="/category-three-grid">News Category 5</NavLink></li>
                                        <li className="border-bottom-0"><NavLink to="/category-three-grid">News Category 6</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/category-three-grid">Science</NavLink></li>
                                <li><NavLink to="/category-three-grid">Mobile</NavLink></li>
                                <li className="has-children position-static"><a href="#"><span>Laptops</span><i className="uil uil-angle-down"></i></a>
                                    <ul className="sub-menu mega-menu justify-content-around d-lg-flex">
                                        <div>
                                            <h5 className="my-3">Hp Gaming Laptop</h5>
                                            <ul>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Hp Gaming Laptop</h5>
                                            <ul>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Hp Gaming Laptop</h5>
                                            <ul>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Hp Gaming Laptop</h5>
                                            <ul>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="my-3">Hp Gaming Laptop</h5>
                                            <ul>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                                <li><a href="#">Hp Horizon</a></li>
                                            </ul>
                                        </div>
                                    </ul>
                                </li>
                                <li><a href="#">Tablets</a></li>
                                <li className="has-children position-static"><a href="#"><span>Headphones</span><i className="uil uil-angle-down"></i></a>
                                    <ul className="sub-menu mega-menu">
                                        <div>
                                            <ul className="mega-menu-content">
                                                <li><a href="#">Gaming Headset</a>
                                                    <div className="blog-mega-menu show-first d-none d-lg-grid">
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/beat-boss.jpg" alt="Beat Boss"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/crosiar-elite.jpg" alt="Crosiar Elite"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/logitech.jpg" alt="Logitech Headset"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/remax-base.jpg" alt="Remax Base"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a href="#">High Base Earbuds</a>
                                                    <div className="blog-mega-menu d-none d-lg-grid">
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/green-buds.jpg" alt="HP Buds"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/yellow-buds.jpg" alt="Beat Buds"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/red-buds.jpg" alt="Samsung Buds"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/black-buds.jpg" alt="Rgb Buds"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a href="#">Budget Laptop</a>
                                                    <div className="blog-mega-menu d-none d-lg-grid">
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/green-laptop.jpg" alt="Gaming Laptop"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/yellow-laptop.jpg" alt="Colored Laptop"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/yellow-laptop.jpg" alt="Yellow Laptop"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/brown-laptop.jpg" alt="Rotate Laptop"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a href="#">Gaming Monitor</a>
                                                    <div className="blog-mega-menu d-none d-lg-grid">
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/msi-monitor.jpg" alt="Msi Monitor"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/dell-monitor.jpg" alt="Dell Monitor"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/lg-monitor.jpg" alt="Lg Monitor"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/asus-monitor.jpg" alt="Asus Monitor"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a href="#">Game Controller</a>
                                                    <div className="blog-mega-menu d-none d-lg-grid">
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/nine-tendo.jpg" alt="Nine Tendo"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/sony-pad.jpg" alt="Sony Controller"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/xbox-pad.jpg" alt="Xbox Controller"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="blog-menu-item">
                                                            <div className="single-blog">
                                                                <a href="#"><img src="images/blogs/nav-blogs/ps5-pad.jpg" alt="Ps5 Controller"/></a>
                                                                <div className="">
                                                                    <a href="#"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                    <p>November 21, 2021</p>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </li>
                                <li><a href="#">Speakers</a></li>
                            </ul>
                        </nav>
                        <div className="nav-right">
                            <div className="nav-meta-icon"><Link to="/sign-in"><i className="uil uil-user-check"></i></Link></div>
                            <div className="nav-meta-icon nav-search-icon"><i className="uil uil-search"></i>
                                <form className="nav-search">
                                    <fieldset className="nav-search-input">
                                        <label htmlFor="nav-search" className="visually-hidden">Search Product</label>
                                        <input type="text" id="nav-search" placeholder="Search for anything"/>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="nav-meta-icon theme-switch">
                                <label htmlFor="theme-check">
                                    <input type="checkbox" id="theme-check" onChange={()=>{
                                        setMode(!darkMode);
                                        changeTheme(darkMode ? themes.light : themes.dark)
                                    }}/>
                                    <span className="theme-toggle"></span>
                                </label>
                            </div>
                            <div className="lang-switcher">
                                <span className="flag"><img src="images/flags/usa-flag.png" alt="USA"/></span>
                                <span className="lang"><i className="uil uil-angle-down"></i></span>
                                <ul className="lang-list">
                                    <li className="single-lang"><span className="flag"><img src="images/flags/bd-flag.png" alt="bangladesh" /></span><a className="lang-text" href="#">BD</a></li>
                                    <li className="single-lang"><span className="flag"><img src="images/flags/usa-flag.png" alt="united-states" /></span><a className="lang-text" href="#">ENG</a></li>
                                    <li className="single-lang"><span className="flag"><img src="images/flags/china-flag.png" alt="china"/></span><a className="lang-text" href="#">CHN</a></li>
                                    <li className="single-lang arabic"><span className="flag"><img src="images/flags/saudi-flag.png" alt="spain"/></span><a className="lang-text" href="#">ARB</a></li>
                                    <li className="single-lang"><span className="flag"><img src="images/flags/german-flag.png" alt="german"/></span><a className="lang-text" href="#">GER</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar