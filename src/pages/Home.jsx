import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LikedPost from '../components/likeposts/LikedPost';

function Home() {
  return (
    <>
        <Header/>
        <LikedPost/>
        <Footer/>
    </>
  )
}

export default Home;