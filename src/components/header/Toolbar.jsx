import React from 'react'

function Toolbar() {
  return (
    <div class="an-toolbar primary-gradient py-2">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-7">
                    <div class="news-scroll">
                        <div class="breaking-title">
                            <p>BREAKING NEWS</p>
                        </div>
                        <div class="news-carousel owl-carousel">
                            <p class="text-white">phasellus odio purus consectetur in dignissim</p>
                            <p class="text-white">phasellus odio purus consectetur in dignissim</p>
                            <p class="text-white">phasellus odio purus consectetur in dignissim</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-5">
                    <div class="row align-items-center">
                        <div class="col-7 text-lg-end">
                            <p class="fw-bold text-white"><i class="uil uil-clock-three"></i> Wednesday, January 19, 2022</p>
                        </div>
                        <div class="col-5">
                            <div class="d-flex align-items-center justify-content-end">
                                <div class="lang-switcher">
                                    <span class="flag"><img src="images/flags/usa-flag.png" alt="USA"/></span>
                                    <a href="#" class="lang"><i class="uil uil-angle-down"></i></a>
                                    <ul class="lang-list">
                                        <li class="single-lang"><span class="flag"><img src="images/flags/bd-flag.png" alt="bangladesh" /></span><a class="lang-text" href="#">BD</a></li>
                                        <li class="single-lang"><span class="flag"><img src="images/flags/usa-flag.png" alt="united-states" /></span><a class="lang-text" href="#">ENG</a></li>
                                        <li class="single-lang"><span class="flag"><img src="images/flags/china-flag.png" alt="china"/></span><a class="lang-text" href="#">CHN</a></li>
                                        <li class="single-lang arabic"><span class="flag"><img src="images/flags/saudi-flag.png" alt="spain"/></span><a class="lang-text" href="#">ARB</a></li>
                                        <li class="single-lang"><span class="flag"><img src="images/flags/german-flag.png" alt="german"/></span><a class="lang-text" href="#">GER</a></li>
                                    </ul>
                                </div>
                                <div class="toolbar-social-links text-lg-end">
                                    <a href="https://www.facebook.com/akaaritbd/" class="social-link"><i class="uil uil-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/accounts/emailsignup/?hl=en" class="social-link"><i class="uil uil-instagram"></i></a>
                                    <a href="https://www.youtube.com/channel/UC5_zUqknHg0Trch7iSnYfyQ" class="social-link"><i class="uil uil-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Toolbar;