import './App.css';
import "./Responsive.css";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "./router/Router";
import Store from "./redux/store"

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Routes/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
