import React,{useContext, useState} from 'react';
import Toolbar from '../components/header/Toolbar';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { LangContext } from '../context/LangContext';
import foodData from '../apis/food-blogs';
import {Link} from 'react-router-dom'

const FoodBlogs = () => {

    const {langShow , setLangShow} = useContext(LangContext);

    const {foods, foodCategory, recepies} = foodData;

    return (
        <>
            <header className="an-header an-food-header">
                <Toolbar langProps={{langShow, setLangShow}}/>
                <Navbar  langProps={{langShow, setLangShow}}/>
            </header>
            <main className="an-main-content bg-food">

                <div className="an-food-blogs sec-spacer-80">
                    <div className="container">
                        <div className="row">
                            {foods.filter(food => food.category === "Banner").map((food,index) =>(

                                <div className={`mb-4 ${index == 0 || index == 3 ? "col-lg-8" : `col-lg-4 ${index > 3 ? "col-sm-6" : ""}`}`} key={food.id}>
                                    <div className="single-blog">
                                        <div className="blog-image rounded-2">
                                            <Link to="/blog-details"><img src={`images/foods/${food.image}`} alt={food.alt}/></Link>
                                        </div>
                                        <div className="food-content-holder">
                                            <div className="blog-content">
                                                <span className="food-tag">{food.tag}</span>
                                                <Link to="/blog-details"><h4 className="my-3">{food.title}</h4></Link>
                                                <p className="meta-data my-3"><span><img src="images/woman-avatar.png" alt="user-avatar"/> {food.name}</span><span><img src="images/food-calendar.png" alt="Calendar Avatar"/> {food.date}</span></p>
                                                <p>{food.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Popular Categories */}
                <div className="an-popular-food-category">
                    <div className="container">
                        <h3 className="mb-4">Popular Categories</h3>
                        <div className="food-category-list">
                            {foodCategory.filter(category => category.type === "Main").map(category =>(

                                <div className="single-category text-center" key={category.id}>
                                    <div className="position-relative">
                                        <a href="#"><img src={`images/foods/${category.image}`} alt={category.alt}/></a>
                                        <div className="overlay-image"><a href="#"><img src="images/instagram.png" alt="Instagram"/></a></div>
                                    </div>
                                    <a href="#"><h5 className="mt-4">{category.name}</h5></a>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Week Popolar Foods */}
                <div className="an-week-popular sec-spacer-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mb-4 mb-xl-0">
                                <h3 className="mb-5">Most Popular Recipes This Week</h3>
                                <div className="popular-recepies hoz-blog">
                                    {recepies.filter(recepie => recepie.type === 'Week-best').map((recepie,index) =>(

                                        <div className="single-blog mb-4 bg-food-content" key={recepie.id}>
                                            <div className="blog-image position-relative">
                                                <a href="#"><img src={`images/foods/${recepie.image}`} alt={recepie.alt} className="food-img"/></a>
                                            </div>
                                            <div className="blog-content position-relative ms-4">
                                                <h1 className="food-num">{index + 1}</h1>
                                                <span className="food-tag">{recepie.tag}</span>
                                                <a href="#"><h2 className="my-3 overflow-title">{recepie.name}</h2></a>
                                                <div className="ratings">
                                                    <span className="me-2">Rating: {recepie.rating}</span>
                                                    <span><i className="uis uis-star"></i></span>
                                                    <span><i className="uis uis-star"></i></span>
                                                    <span><i className="uis uis-star"></i></span>
                                                    <span><i className="uis uis-star"></i></span>
                                                    <span><i className="uis uis-star"></i></span>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <h3 className="mb-4 mb-xl-5">Popular Categories</h3>
                                <div className="category-widget mb-4">
                                    {foodCategory.filter(category => category.type === "Popular").map(category =>(

                                        <div className="blog-img position-relative" key={category.id}>
                                            <a href="#"><img src={`images/foods/${category.image}`} alt={category.alt} className="food-img"/></a>
                                            <span className="food-tag">{category.name}</span>
                                        </div>

                                    ))}
                                </div>
                                <div className="social-widget">
                                <h4 className="mb-4">Social Link</h4>
                                <ul className="widget-social-links d-flex flex-wrap">
                                    <li><a href="#" className="fb-link"><span><i className="uil uil-facebook-f"></i> Facebook</span><span>5K</span></a></li>
                                    <li><a href="#" className="tweet-link"><span><i className="uil uil-twitter"></i> Twitter</span><span>6K</span></a></li>
                                    <li><a href="#" className="insta-link"><span><i className="uil uil-instagram"></i> Instagram</span><span>7K</span></a></li>
                                    <li><a href="#" className="youtube-link"><span><i className="uil uil-youtube"></i> Youtube</span><span>8K</span></a></li>
                                    <li><a href="#" className="snap-link"><span><i className="uil uil-snapchat-ghost"></i> Snapchat </span><span>10K</span></a></li>
                                    <li><a href="#" className="linkedin-link"><span><i className="uil uil-linkedin-alt"></i> Linkedin</span><span>15K</span></a></li>
                                </ul>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Best Recipes 1 */}
                <div className="an-best-recepies">
                    <div className="container">
                        <h3 className="mb-5">Our Best Chicken Recipes</h3>
                        <div className="row">
                            {recepies.filter(recepie => recepie.type === "Nonveg").map(recepie =>(

                                <div className="col-lg-4 col-sm-6" key={recepie.id}>
                                    <div className="single-blog mb-4">
                                        <div className="blog-image"><a href="#"><img src={`images/foods/${recepie.image}`} alt={recepie.alt} className="rounded-0"/></a></div>
                                        <div className="blog-content ps-3 bg-white">
                                            <div className="mb-3"><span className="food-tag">{recepie.tag}</span></div>
                                            <a href="#"><h4 className="blog-title overflow-title">{recepie.name}</h4></a>
                                            <div className="ratings mt-3">
                                                <span className="me-2">Rating: {recepie.rating}</span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                            </div>
                                            <p className="mt-3">{recepie.des}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Best Recipes 2 */}
                <div className="an-best-recepies sec-spacer-80">
                    <div className="container">
                        <h3 className="mb-5">We love our air fryer</h3>
                        <div className="row">
                            {recepies.filter(recepie => recepie.type === "Breakfast").map(recepie =>(

                                <div className="col-lg-4 col-sm-6" key={recepie.id}>
                                    <div className="single-blog mb-4">
                                        <div className="blog-image"><a href="#"><img src={`images/foods/${recepie.image}`} alt={recepie.alt} className="rounded-0"/></a></div>
                                        <div className="blog-content ps-3 bg-white">
                                            <div className="mb-3"><span className="food-tag">{recepie.tag}</span></div>
                                            <a href="#"><h4 className="blog-title overflow-title">{recepie.name}</h4></a>
                                            <div className="ratings mt-3">
                                                <span className="me-2">Rating: {recepie.rating}</span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                            </div>
                                            <p className="mt-3">{recepie.des}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Best Recipes 3 */}
                <div className="an-best-recepies">
                    <div className="container">
                        <h3 className="mb-5">Vegan/Vegetarian Recipes</h3>
                        <div className="row">
                            {recepies.filter(recepie => recepie.type === "Veg").map(recepie =>(

                                <div className="col-lg-4 col-sm-6" key={recepie.id}>
                                    <div className="single-blog mb-4">
                                        <div className="blog-image"><a href="#"><img src={`images/foods/${recepie.image}`} alt={recepie.alt} className="rounded-0"/></a></div>
                                        <div className="blog-content ps-3 bg-white">
                                            <div className="mb-3"><span className="food-tag">{recepie.tag}</span></div>
                                            <a href="#"><h4 className="blog-title overflow-title">{recepie.name}</h4></a>
                                            <div className="ratings mt-3">
                                                <span className="me-2">Rating: {recepie.rating}</span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                            </div>
                                            <p className="mt-3">{recepie.des}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Best Recipes 4 */}
                <div className="an-best-recepies sec-spacer-80">
                    <div className="container">
                        <h3 className="mb-5">Super easy, barely an inconvenience</h3>
                        <div className="row">
                            {recepies.filter(recepie => recepie.type === "Easy").map(recepie =>(

                                <div className="col-lg-4 col-sm-6" key={recepie.id}>
                                    <div className="single-blog mb-4">
                                        <div className="blog-image"><a href="#"><img src={`images/foods/${recepie.image}`} alt={recepie.alt} className="rounded-0"/></a></div>
                                        <div className="blog-content ps-3 bg-white">
                                            <div className="mb-3"><span className="food-tag">{recepie.tag}</span></div>
                                            <a href="#"><h4 className="blog-title overflow-title">{recepie.name}</h4></a>
                                            <div className="ratings mt-3">
                                                <span className="me-2">Rating: {recepie.rating}</span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                                <span><i className="uis uis-star"></i></span>
                                            </div>
                                            <p className="mt-3">{recepie.des}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </>
    )
}

export default FoodBlogs