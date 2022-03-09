import React from 'react'
import {Routes , Route} from "react-router-dom";
import CategoryGridThree from '../pages/CategoryGridThree';
import Home from '../pages/Home';

function router() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/category-three-grid" exact element={<CategoryGridThree/>}/>
        <Route>404 Not Found</Route>
    </Routes>
  )
}

export default router;