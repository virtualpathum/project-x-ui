import React from "react";
import { Router} from "react-router-dom";
import Header from './components/Header/Header'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { history } from "./helpers/history";

const App = () => {
  
  return (
    <Router history={history}>
      <Header />
    </Router>
  );
};

export default App;
