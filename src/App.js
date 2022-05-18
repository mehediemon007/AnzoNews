import './App.css';
import "./Responsive.css";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "./router/Router";
import Store from "./redux/store";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  return (
    <Provider store={Store}>
      <SimpleReactLightbox>
        <div className="App">
          <Router>
            <Routes/>
          </Router>
          <ToastContainer/>
        </div>
      </SimpleReactLightbox>
    </Provider>
  );
}

export default App;
