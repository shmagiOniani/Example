import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import Nav from "./components/Nav/Nav";
import { routes } from "./routes";
import Device from "./components/Device/Device";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {routes.map((prop) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={prop.path}
              />
            );
          })}
          <Route exact path="/Device/Device/:model">
            <Device />
          </Route>
          <Route exact path="/">
            <Redirect to="/Dashboard/Application" />
          </Route>
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    </Router>
  );
}
