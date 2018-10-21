import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


import Nutrition from "./pages/Nutrition";


const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Nutrition" component={Nutrition} />
        </Switch>
      </div>
    </Router>
  );
  
  export default App;
