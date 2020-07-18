import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/screens/home";
import Login from "./components/screens/login";
import Signup from "./components/screens/signup";
import Profile from "./components/screens/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
