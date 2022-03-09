import React from 'react';

function Navbar() {
  return (
    <>
        <div class="an-nav bg-white">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between position-relative">
                    <div class="nav-meta-icon nav-toggle d-lg-none">
                        <i class="uil uil-bars"></i>
                    </div>
                    <nav class="an-main-nav">
                        <ul class="nav-menu d-lg-flex align-items-center">
                            <li><a href="#" class="nav-active">Home</a></li>
                            <li class="has-children"><a href="#"><span>Tech</span><i class="uil uil-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="#">News Category 1</a></li>
                                    <li><a href="#">News Category 2</a></li>
                                    <li class="has-children"><a href="#">News Category 3 <i class="uil uil-angle-right d-none d-lg-inline-block"></i><i class="uil uil-angle-down d-lg-none"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="#">News Category 1</a></li>
                                            <li><a href="#">News Category 2</a></li>
                                            <li class="border-bottom-0"><a href="#">News Category 6</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">News Category 4</a></li>
                                    <li><a href="#">News Category 5</a></li>
                                    <li class="border-bottom-0"><a href="#">News Category 6</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Science</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li class="has-children position-static"><a href="#"><span>Laptops</span><i class="uil uil-angle-down"></i></a>
                                <ul class="sub-menu mega-menu justify-content-around d-lg-flex">
                                    <div>
                                        <h5 class="my-3">Hp Gaming Laptop</h5>
                                        <ul>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="my-3">Hp Gaming Laptop</h5>
                                        <ul>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="my-3">Hp Gaming Laptop</h5>
                                        <ul>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="my-3">Hp Gaming Laptop</h5>
                                        <ul>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                            <li><a href="#">Hp Horizon</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 class="my-3">Hp Gaming Laptop</h5>
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
                            <li class="has-children position-static"><a href="#"><span>Headphones</span><i class="uil uil-angle-down"></i></a>
                                <ul class="sub-menu mega-menu">
                                    <div>
                                        <ul class="mega-menu-content">
                                            <li><a href="#">Gaming Headset</a>
                                                <div class="blog-mega-menu show-first d-none d-lg-grid">
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/beat-boss.jpg" alt="Beat Boss"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/crosiar-elite.jpg" alt="Crosiar Elite"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/logitech.jpg" alt="Logitech Headset"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/remax-base.jpg" alt="Remax Base"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#">High Base Earbuds</a>
                                                <div class="blog-mega-menu d-none d-lg-grid">
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/green-buds.jpg" alt="HP Buds"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/yellow-buds.jpg" alt="Beat Buds"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/red-buds.jpg" alt="Samsung Buds"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/black-buds.jpg" alt="Rgb Buds"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#">Budget Laptop</a>
                                                <div class="blog-mega-menu d-none d-lg-grid">
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/green-laptop.jpg" alt="Gaming Laptop"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/yellow-laptop.jpg" alt="Colored Laptop"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/yellow-laptop.jpg" alt="Yellow Laptop"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/brown-laptop.jpg" alt="Rotate Laptop"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#">Gaming Monitor</a>
                                                <div class="blog-mega-menu d-none d-lg-grid">
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/msi-monitor.jpg" alt="Msi Monitor"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/dell-monitor.jpg" alt="Dell Monitor"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/lg-monitor.jpg" alt="Lg Monitor"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/asus-monitor.jpg" alt="Asus Monitor"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#">Game Controller</a>
                                                <div class="blog-mega-menu d-none d-lg-grid">
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/nine-tendo.jpg" alt="Nine Tendo"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/sony-pad.jpg" alt="Sony Controller"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/xbox-pad.jpg" alt="Xbox Controller"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
                                                                <p>November 21, 2021</p>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="blog-menu-item">
                                                        <div class="single-blog">
                                                            <a href="#"><img src="images/blogs/nav-blogs/ps5-pad.jpg" alt="Ps5 Controller"/></a>
                                                            <div class="">
                                                                <a href="#"><h6 class="overflow-title">This is the title of a new tier has been the title of a news</h6></a>
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
                    <div class="nav-right">
                        <div class="nav-meta-icon"><a href="#"><i class="uil uil-user-check"></i></a></div>
                        <div class="nav-meta-icon nav-search-icon"><i class="uil uil-search"></i>
                            <form class="nav-search">
                                <fieldset class="nav-search-input">
                                    <label htmlFor="nav-search" class="visually-hidden">Search Product</label>
                                    <input type="text" id="nav-search" placeholder="Search for anything"/>
                                </fieldset>
                            </form>
                        </div>
                        <div class="nav-meta-icon theme-switch">
                            <label htmlFor="theme-check">
                                <input type="checkbox" id="theme-check"/>
                                <span class="theme-toggle"></span>
                            </label>
                        </div>
                        <div class="lang-switcher">
                            <span class="flag"><img src="images/flags/usa-flag.png" alt="USA"/></span>
                            <span class="lang"><i class="uil uil-angle-down"></i></span>
                            <ul class="lang-list">
                                <li class="single-lang"><span class="flag"><img src="images/flags/bd-flag.png" alt="bangladesh" /></span><a class="lang-text" href="#">BD</a></li>
                                <li class="single-lang"><span class="flag"><img src="images/flags/usa-flag.png" alt="united-states" /></span><a class="lang-text" href="#">ENG</a></li>
                                <li class="single-lang"><span class="flag"><img src="images/flags/china-flag.png" alt="china"/></span><a class="lang-text" href="#">CHN</a></li>
                                <li class="single-lang arabic"><span class="flag"><img src="images/flags/saudi-flag.png" alt="spain"/></span><a class="lang-text" href="#">ARB</a></li>
                                <li class="single-lang"><span class="flag"><img src="images/flags/german-flag.png" alt="german"/></span><a class="lang-text" href="#">GER</a></li>
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