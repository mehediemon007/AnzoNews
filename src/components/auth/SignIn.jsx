import React from 'react'

    const SignIn = () => {
    return (
        <>
            <div class="an-sign">
                <div class="an-log-form">
                   <div class="log-tab-links text-center mb-4">
                       <span class="sign-in active">Sign In</span>
                       <span class="sign-up">Register</span>
                   </div>

                   <div class="an-sign-in show mt-40">
                       <form class="sign-in-form">
                           <fieldset class="an-input mb-4">
                               <label for="user-id" class="visually-hidden"></label>
                               <input type="text" placeholder="Email / Phone No" id="user-id"/>
                           </fieldset>
                           <fieldset class="an-input position-relative">
                               <label for="user-pass" class="visually-hidden"></label>
                               <input type="text" placeholder="Password" id="user-pass"/>
                               <div class="pass-input">
                                    <i class="uil uil-eye"></i>
                               </div>
                           </fieldset>
                           <button type="submit" class="log-btn">Login</button>
                       </form>
                       <p class="text-center mt-2"><a href="forget-pass.html">Forgot your Password?</a></p>
                       <div class="social-login text-center">
                           <p class="my-3 light-color">Quick Access With</p>
                           <div class="social-login-links">
                               <a href="https://appleid.apple.com/" class="me-3"><img src="images/apple-2.png" alt="apple store"/></a>
                               <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="me-3"><img src="images/google-2.png" alt="google"/></a>
                               <a href="https://www.facebook.com/"><img src="images/fb-2.png" alt="facebook"/></a>
                           </div>
                       </div>
                   </div>
                    
                   <div class="an-sign-up">
                       <div class="sign-up-options text-center mb-4">
                           <span class="phone-login active border-0 "><i class="uil uil-mobile-android"></i> Phone</span>
                           <span class="mail-login border-0"><i class="uil uil-envelope"></i> Email</span>
                       </div>
                       <form class="sign-with-phone show">
                           <fieldset class="an-input mb-4">
                               <label for="user-phone" class="visually-hidden"></label>
                               <input type="text" placeholder="Phone No." id="user-phone"/>
                           </fieldset>
                           <fieldset class="an-input position-relative mb-4">
                                <label for="user-password" class="visually-hidden"></label>
                                <input type="text" placeholder="Password" id="user-password"/>
                                <div class="pass-input">
                                    <i class="uil uil-eye"></i>
                                </div>
                           </fieldset>
                           <fieldset class="policy-checkbox mt-2">
                               <input type="checkbox" id="policy-check"/>
                               <label for="policy-check">I agree to angoods.com terms of Use and privacy policy</label>
                           </fieldset>
                           <button type="submit" class="log-btn">Sign Up</button>
                       </form>
                       <form class="sign-with-mail">
                           <fieldset class="an-input mb-4">
                               <label for="user-mail" class="visually-hidden"></label>
                               <input type="text" placeholder="Email" id="user-mail"/>
                           </fieldset>
                           <fieldset class="an-input position-relative mb-4">
                                <label for="user-mail-pass" class="visually-hidden"></label>
                                <input type="text" placeholder="Password" id="user-mail-pass"/>
                                <div class="pass-input">
                                    <i class="uil uil-eye"></i>
                                </div>
                           </fieldset>
                           <fieldset class="policy-checkbox mt-2">
                               <input type="checkbox" id="policy-check-mail"/>
                               <label for="policy-check-mail">I agree to angoods.com terms of Use and privacy policy</label>
                           </fieldset>
                           <button type="submit" class="log-btn">Sign Up</button>
                       </form>
                       <div class="social-login text-center">
                           <p class="my-3 light-color">Quick Access With</p>
                           <div class="social-login-links">
                               <a href="https://appleid.apple.com/" class="me-3"><img src="images/apple-2.png" alt="apple store"/></a>
                               <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="me-3"><img src="images/google-2.png" alt="google"/></a>
                               <a href="https://www.facebook.com/"><img src="images/fb-2.png" alt="facebook"/></a>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </>
    )
    }

export default SignIn