import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl-animate.css";  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import ThemeContextWrapper from './context/ThemeContext';

ReactDOM.render(
    <ThemeContextWrapper>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ThemeContextWrapper>,
  document.getElementById('root')
);

