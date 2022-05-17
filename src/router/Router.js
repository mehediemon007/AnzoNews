import React from 'react'
import {Routes , Route, useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react';
import CategoryGridThree from '../pages/CategoryGridThree';
import CategoryList from '../pages/CategoryList';
import Home from '../pages/Home';
import Home6 from '../pages/Home6';
import LogIn from '../pages/LogIn';
import HomeNews from '../pages/HomeNews';
import News from '../pages/News';
import ForgetPassword from '../pages/ForgetPassword';
import OTP from '../pages/OTP';
import Newpass from '../pages/Newpass';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import UserActivity from '../pages/UserActivity';
import RecentViews from '../pages/RecentViews';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function router() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/home-news" exact element={<HomeNews/>}/>
                <Route path="/news" exact element={<News/>}/>
                <Route path="/category-three-grid" exact element={<CategoryGridThree/>}/>
                <Route path="/category-list" exact element={<CategoryList/>}/>
                <Route path="/blog-details" exact element={<Home6/>}/>
                <Route path="/profile" exact element={<Profile/>}/>
                <Route path="/activity" exact element={<UserActivity/>}/>
                <Route path="/recent-views" exact element={<RecentViews/>}/>
                <Route path="/new-post" exact element={<NewPost/>}/>
                <Route path="/sign-in" exact element={<LogIn/>}/>
                <Route path="/forget-password" exact element={<ForgetPassword/>}/>
                <Route path="/otp" exact element={<OTP/>}/>
                <Route path="/new-pass" exact element={<Newpass/>}/>
                <Route>404 Not Found</Route>
            </Routes>
        </Wrapper>
    )
}

export default router;