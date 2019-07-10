import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layout/Nav"
import Loading from "./components/pages/Loading";
import Planning from "./components/pages/planning/Planning";
import Registry from "./components/pages/registry/Registry";
import Vendor from "./components/pages/vendor/Vendor";
import Website from "./components/pages/website/Website";
import Signup from "./components/pages/join/Signup";
import Login from "./components/pages/join/Login";
import VendorLogin from "./components/pages/join/VendorLogin";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Loading} />+
          <Route exact path="/planning" component={Planning} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/vendor" component={Vendor} />
          <Route exact path="/website" component={Website} />
          
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/login/vendor" component={VendorLogin}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
