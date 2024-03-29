import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import ThemeContextWrapper from './context/ThemeContext';
import LangContextWrapper from "./context/LangContext";
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(

    <ThemeContextWrapper>
        <LangContextWrapper>
            <React.StrictMode>
                <SimpleReactLightbox>
                    <App />
                </SimpleReactLightbox>
            </React.StrictMode>
        </LangContextWrapper>
    </ThemeContextWrapper>,
  document.getElementById('root')
  
);

