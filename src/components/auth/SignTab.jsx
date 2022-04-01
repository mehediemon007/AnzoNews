import React,{useState} from 'react';
import { Tabs, Tab } from "react-bootstrap";
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignTab = () => {

    const [key, setKey] = useState("signin");

    return (
        <>
            <div className="an-sign">
                <div className="an-log-form">
                   <Tabs className="tabs log-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                        <Tab eventKey="signin" title="Sign In" className=''>
                            <SignIn/>
                        </Tab>
                        <Tab eventKey="signup" title="Register" className=''>
                            <SignUp/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default SignTab