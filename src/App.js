import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import CreateEmployeeComponent from "./Component/CreateEmployeeComponent";
import EmployeeService from "./Service/EmployeeService";
import FooterComponent from "./Component/FooterComponent";
import HeaderComponent from "./Component/HeaderComponent";
import ListEmployeeComponent from "./Component/ListEmployeeComponent";
import ViewEmployeeComponent from "./Component/ViewEmployeeComponent";

function App()
 {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <div style={{textAlign:"center"}}>
           <FooterComponent/>
           </div>
      </Router>
    </div>
  );
}
export default App;








