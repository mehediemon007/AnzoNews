import React,{useEffect, useState, useContext} from 'react';
import {NavLink , Link} from "react-router-dom";
import { ThemeContext, themes } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';
import VideoModal from '../video-blogs/VideoModal';
import data from '../../apis/headphone';

const NavMenu = () => {

    const {theme, changeTheme} = useContext(ThemeContext);
    
    const [searchBar, setSearchBar] = useState(false);
    const [navClick, setNavClick] = useState(false);

    const {langData, setLang, handleLang, langShow , setLangShow } = useContext(LangContext);

    const {featureNews: news} = data.newBlogs;

    const handleSubMenu = (e) =>{
        
        e.currentTarget.querySelector(".sub-menu").classList.toggle("show");

    }

    return (
        <>
            <nav className={`an-main-nav ${navClick ? 'show' : ''}`}>
                <ul className="nav-menu d-lg-flex align-items-center">
                    <li className="has-children" onClick={(e)=>handleSubMenu(e)}><NavLink to="#" className="nav-active"><span>Home</span><i className="uil uil-angle-down"></i></NavLink>
                        <ul className="sub-menu" onClick={()=>setNavClick(!navClick)}>
                            <li><NavLink to="/">Home Main</NavLink></li>
                            <li><NavLink to="/home-news">Home News</NavLink></li>
                            <li className="border-bottom-0"><NavLink to="/home-food">Home Food</NavLink></li>
                        </ul>
                    </li>
                    <li className="has-children" onClick={(e)=>handleSubMenu(e)}><NavLink to="#"><span>Blog</span><i className="uil uil-angle-down"></i></NavLink>
                        <ul className="sub-menu" onClick={()=>setNavClick(!navClick)}>
                            <li><NavLink to="/category-three-grid">Blog Grid</NavLink></li>
                            <li><NavLink to="/category-list">Blog List</NavLink></li>
                            <li className="border-bottom-0"><NavLink to="/blog-details">Blog Details</NavLink></li>
                        </ul>
                    </li>
                    <li className="has-children position-static" onClick={(e)=>handleSubMenu(e)}><NavLink to="#"><span>News</span><i className="uil uil-angle-down"></i></NavLink>
                        <ul className="sub-menu mega-menu" onClick={()=>setNavClick(!navClick)}>
                            <div>
                                <ul className="mega-menu-content">
                                    <li><Link to="/news">Latest News</Link>
                                        <div className="blog-mega-menu show-first d-none d-lg-grid">                                                        
                                            {news.filter(news => news.tag === 'Latest').slice(0,4).map(news =>(
                                                <div className="blog-menu-item" key={news.id}>
                                                    <div className="single-blog">

                                                        { news.postType === "video" ?
                                                            <div className="video-post-image position-relative">
                                                                <img src={`images/blogs/${news.image}`} alt={news.alt}/>
                                                                <VideoModal/>
                                                            </div> :
                                                            <Link to="/news"><img src={`images/blogs/${news.image}`} alt={news.alt}/></Link>
                                                        }
                                                        <div className="">
                                                            <Link to="/news"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></Link>
                                                            <p><img src="/images/clock-avatar.png" alt="Clock Avatar" style={{"verticalAlign": "sub"}}/> {news.date}</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                    <li><Link to="/news">Feature News</Link>
                                        <div className="blog-mega-menu d-none d-lg-grid">
                                            {news.filter(news => news.tag === 'Feature').slice(0,4).map(news =>(
                                                <div className="blog-menu-item" key={news.id}>
                                                    <div className="single-blog">

                                                        { news.postType === "video" ?
                                                            <div className="video-post-image position-relative">
                                                                <img src={`images/blogs/${news.image}`} alt={news.alt}/>
                                                                <VideoModal/>
                                                            </div> :
                                                            <Link to="/news"><img src={`images/blogs/${news.image}`} alt={news.alt}/></Link>
                                                        }
                                                        <div className="">
                                                            <Link to="/news"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></Link>
                                                            <p><img src="/images/clock-avatar.png" alt="Clock Avatar" style={{"verticalAlign": "sub"}}/> {news.date}</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                    <li><Link to="/news">Popular News</Link>
                                        <div className="blog-mega-menu d-none d-lg-grid">
                                            {news.filter(news => news.tag === 'Popular').slice(0,4).map(news =>(
                                                <div className="blog-menu-item" key={news.id}>
                                                    <div className="single-blog">

                                                        { news.postType === "video" ?
                                                            <div className="video-post-image position-relative">
                                                                <img src={`images/blogs/${news.image}`} alt={news.alt}/>
                                                                <VideoModal/>
                                                            </div> :
                                                            <Link to="/news"><img src={`images/blogs/${news.image}`} alt={news.alt}/></Link>
                                                        }
                                                        <div className="">
                                                            <Link to="/news"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></Link>
                                                            <p><img src="/images/clock-avatar.png" alt="Clock Avatar" style={{"verticalAlign": "sub"}}/> {news.date}</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                    <li><Link to="/news">Attractive News</Link>
                                        <div className="blog-mega-menu d-none d-lg-grid">
                                            {news.filter(news => news.tag === 'Interest').slice(0,4).map(news =>(
                                                <div className="blog-menu-item" key={news.id}>
                                                    <div className="single-blog">

                                                        { news.postType === "video" ?
                                                            <div className="video-post-image position-relative">
                                                                <img src={`images/blogs/${news.image}`} alt={news.alt}/>
                                                                <VideoModal/>
                                                            </div> :
                                                            <Link to="/news"><img src={`images/blogs/${news.image}`} alt={news.alt}/></Link>
                                                        }
                                                        <div className="">
                                                            <Link to="/news"><h6 className="overflow-title">This is the title of a new tier has been the title of a news</h6></Link>
                                                            <p><img src="/images/clock-avatar.png" alt="Clock Avatar" style={{"verticalAlign": "sub"}}/> {news.date}</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </li>
                    <li className="has-children" onClick={(e)=>handleSubMenu(e)}><NavLink to="#"><span>Pages</span><i className="uil uil-angle-down"></i></NavLink>
                        <ul className="sub-menu" onClick={()=>setNavClick(!navClick)}>
                            {/* <li><NavLink to="/news">News</NavLink></li> */}
                            <li><NavLink to="/recent-views">Recent Viewed</NavLink></li>
                            <li><NavLink to="/activity">Activity</NavLink></li>
                            <li><NavLink to="/image-gallery">Image Gallery</NavLink></li>
                            <li className="border-bottom-0"><NavLink to="/video-gallery">Video Gallery</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/new-post">Add Blog</NavLink></li>
                    <li><Link to="#"></Link></li>
                </ul>
            </nav>
            <div className="nav-right">
                <div className="nav-meta-icon nav-toggle d-lg-none" onClick={()=> setNavClick(!navClick)}>
                    <i className={`${navClick ? 'uil uil-times' : 'uil uil-bars'}`}></i>
                </div>
                <div className="nav-meta-icon">
                    <span><i className="uil uil-user-check"></i></span>
                    <ul className="acc-menu">
                        <li><Link to="/sign-in"><i className="uil uil-signin"></i> Sign In/Up</Link></li>
                        <li><Link to="/profile"><i className="uil uil-setting"></i> Profile</Link></li>
                    </ul>
                </div>
                <div className="nav-meta-icon nav-search-icon" onClick={()=>setSearchBar(!searchBar)}><i className="uil uil-search"></i>
                    <form className="nav-search" style={{display : searchBar ? "block" : "none"}}>
                        <fieldset className="nav-search-input">
                            <label htmlFor="nav-search" className="visually-hidden">Search Product</label>
                            <input type="text" id="nav-search" placeholder="Search for anything"/>
                        </fieldset>
                    </form>
                </div>
                <div className="nav-meta-icon theme-switch">
                    <label htmlFor="theme-check">
                        <input type="checkbox" id="theme-check" onChange={()=>{
                            changeTheme(theme === "light" ? themes.dark : themes.light)
                        }}/>
                        <span className="theme-toggle"></span>
                    </label>
                </div>
                <div className="lang-switcher" onClick={()=> setLangShow(!langShow)}>
                    <span className="flag">
                        {langData.filter(lang => lang.selected === true).map(({img,alt})=><img src={`images/flags/${img}`} alt={alt} key={alt}/>)}
                    </span>
                    <span className="lang"><i className="uil uil-angle-down"></i></span>
                    <ul className = {`lang-list ${langShow ? "lang-list-open" : ""}`}>
                        {langData.map(el =>{
                            return(
                                <li className="single-lang" key={el.langName} onClick={()=> handleLang(el)}><span className="flag"><img src={`images/flags/${el.img}`} alt={el.alt} /></span><a className="lang-text" href="#">{el.langName}</a></li>
                            )
                            
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavMenu