import './App.css';
import "./Responsive.css";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "./router/Router";
import Store from "./redux/store";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Provider store={Store}>
            <div className="App">
                <Router>
                    <Routes/>
                </Router>
                <ToastContainer/>
            </div>
        </Provider>
    );
}

export default App;
