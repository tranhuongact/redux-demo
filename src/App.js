import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from "./components/Counter"

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="container collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">Counter</Link>
              </li>
              <li className="nav-item">
                <Link to="/todo" className="nav-link">Todo List</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todo">
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="text-center mt-3">Redux Example</h2>
}