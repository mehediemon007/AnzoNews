import React,{useEffect, useState, useContext} from 'react';
import {NavLink , Link} from "react-router-dom";
import { ThemeContext, themes } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';
import VideoModal from '../video-blogs/VideoModal';
import data from '../../apis/headphone';

function Navbar(props) {

    const {theme, changeTheme} = useContext(ThemeContext);
    
    const [searchBar, setSearchBar] = useState(false);
    const [navClick, setNavClick] = useState(false);

    const {langData, setLang, handleLang } = useContext(LangContext);

    const {langShow , setLangShow} = props.langProps;

    const {featureNews: news} = data.newBlogs;

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
            <div className={`an-nav${!props.dark ? ' bg-white' : ''}`}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                         <Link to="/"><img src="images/logo/logo.png" alt="logo"/></Link>
                        <nav className={`an-main-nav ${navClick ? 'show' : ''}`}>
                            <ul className="nav-menu d-lg-flex align-items-center">
                                <li className="has-children"><NavLink to="#" className="nav-active"><span>Home</span><i className="uil uil-angle-down"></i></NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/">Home Main</NavLink></li>
                                        <li><NavLink to="/home-news">Home News</NavLink></li>
                                        <li className="border-bottom-0"><NavLink to="/home-food">Home Food</NavLink></li>
                                    </ul>
                                </li>
                                <li className="has-children"><NavLink to="#"><span>Blog</span><i className="uil uil-angle-down"></i></NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/category-three-grid">Blog Grid</NavLink></li>
                                        <li><NavLink to="/category-list">Blog List</NavLink></li>
                                        <li className="border-bottom-0"><NavLink to="/blog-details">Blog Details</NavLink></li>
                                    </ul>
                                </li>
                                <li className="has-children position-static"><Link to="#"><span>News</span><i className="uil uil-angle-down"></i></Link>
                                    <ul className="sub-menu mega-menu">
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
                                                                        <p>{news.date}</p>
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
                                                                        <p>{news.date}</p>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li><Link to="#">Popular News</Link>
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
                                                                        <p>{news.date}</p>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li><Link to="#">Attractive News</Link>
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
                                                                        <p>{news.date}</p>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                                {/* <li><a href="#">Game Controller</a>
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
                                                </li> */}
                                            </ul>
                                        </div>
                                    </ul>
                                </li>
                                <li className="has-children"><Link to="#"><span>Pages</span><i className="uil uil-angle-down"></i></Link>
                                    <ul className="sub-menu">
                                        {/* <li><NavLink to="/news">News</NavLink></li> */}
                                        <li><NavLink to="/recent-views">Recent Viewed</NavLink></li>
                                        <li><NavLink to="/activity">Activity</NavLink></li>
                                        <li><NavLink to="/image-gallery">Image Gallery</NavLink></li>
                                        <li className="border-bottom-0"><NavLink to="/video-gallery">Video Gallery</NavLink></li>
                                    </ul>
                                    {/* <ul className="sub-menu mega-menu justify-content-around d-lg-flex">
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
                                    </ul> */}
                                </li>
                                <li><Link to="/new-post">Add Blog</Link></li>
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
                                    <li><Link to="/sign-in"><i class="uil uil-signin"></i> Sign In/Up</Link></li>
                                    <li><Link to="/profile"><i class="uil uil-setting"></i> Profile</Link></li>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar