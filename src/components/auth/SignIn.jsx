import React,{useState} from 'react'

const SignIn = () => {

    const [signData , setData ] = useState({
        "user":"",
        password:""
    })

    const handleSignIn = (e) => {
        e.preventDefault();
        setData({
            "user":"",
            "password":""
        })
    }

    return (
        <>
            <div className="an-sign-in mt-40">
                <form className="sign-in-form" onSubmit={handleSignIn}>
                    <fieldset className="an-input mb-4">
                        <label htmlFor="user-id" className="visually-hidden"></label>
                        <input type="text" value={signData.user} placeholder="Email / Phone No" id="user-id" name='user' onChange={(e)=> setData({...signData, user: e.target.value})}/>
                    </fieldset>
                    <fieldset className="an-input position-relative">
                        <label htmlFor="user-pass" className="visually-hidden"></label>
                        <input type="text" value={signData.password} placeholder="Password" id="user-pass" name='password' onChange={(e)=> setData({...signData, password: e.target.value})}/>
                        <div className="pass-input">
                                <i className="uil uil-eye"></i>
                        </div>
                    </fieldset>
                    <button type="submit" className="log-btn">Login</button>
                </form>
                <p className="text-center mt-2"><a href="forget-pass.html">Forgot your Password?</a></p>
                <div className="social-login text-center">
                    <p className="my-3 light-color">Quick Access With</p>
                    <div className="social-login-links">
                        <a href="https://appleid.apple.com/" className="me-3"><img src="images/apple-2.png" alt="apple store"/></a>
                        <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="me-3"><img src="images/google-2.png" alt="google"/></a>
                        <a href="https://www.facebook.com/"><img src="images/fb-2.png" alt="facebook"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn