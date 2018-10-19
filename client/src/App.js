import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nutrition from "./pages/Nutrition";


const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nutrition" component={Nutrition} />
        </Switch>
      </div>
    </Router>
  );
  
  export default App;
