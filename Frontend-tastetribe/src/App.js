import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/User_Mangement_IT20658236/UserProfile";
import AddUser from "./components/User_Mangement_IT20658236/AddUser";
import EditUser from "./components/User_Mangement_IT20658236/EditUser";
import Login from "./components/Comman/Login";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Add-User" component={AddUser} />
            <Route path="/User/:id" component={UserProfile} />
            <Route path="/Edit-User/:id" component={EditUser} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
