import React from 'react'
import {Routes , Route} from "react-router-dom";
import CategoryGridThree from '../pages/CategoryGridThree';
import CategoryList from '../pages/CategoryList';
import Home from '../pages/Home';
import Home6 from '../pages/Home6';

function router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/category-three-grid" exact element={<CategoryGridThree/>}/>
      <Route path="/category-list" exact element={<CategoryList/>}/>
      <Route path="/home-6" exact element={<Home6/>}/>
      <Route>404 Not Found</Route>
    </Routes>
  )
}

export default router;