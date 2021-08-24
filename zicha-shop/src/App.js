import React from "react";
import "./App.css"
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Prouct from "./components/pages/Product";
import Footer from "./components/inc/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produits">
            <Prouct />
          </Route>
        </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
