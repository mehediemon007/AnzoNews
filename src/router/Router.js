import React from 'react'
import {Routes , Route, useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react';
import CategoryGridThree from '../pages/CategoryGridThree';
import CategoryList from '../pages/CategoryList';
import Home from '../pages/Home';
import Home6 from '../pages/Home6';
import LogIn from '../pages/LogIn';

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
            <Route path="/category-three-grid" exact element={<CategoryGridThree/>}/>
            <Route path="/category-list" exact element={<CategoryList/>}/>
            <Route path="/blog-details" exact element={<Home6/>}/>
            <Route path="/sign-in" exact element={<LogIn/>}/>
            <Route>404 Not Found</Route>
        </Routes>
      </Wrapper>
    )
}

export default router;