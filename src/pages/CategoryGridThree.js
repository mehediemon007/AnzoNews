import React from 'react'
import GridBlogs from '../components/grid-blogs/GridBlogs';
import SidebarWidget from '../components/sidebar/SidebarWidget';

function CategoryGridThree() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-xl-9">
                    <GridBlogs/>
                </div>
                <div className="col-xl-3 mb-5 mb-xl-0">
                    <SidebarWidget/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryGridThree