import React, { useEffect, } from "react";
import Counter from "./Counter";
import Todos from "./Todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageSearch from "./ImageSearch";
import ImageSearchFn from "./ImageSearch/ImageSearchFn";
import { Provider } from "react-redux";
import store from "./reduxStore";
import Signin from './Signin'
import Posts from './Posts'
import { setToken } from "./api";

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                My React App
              </a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/counter">
                    Counter
                  </Link>

                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>

                  <Link className="nav-link" to="/imgsearch">
                    Image Search
                  </Link>

                  <Link className="nav-link" to="/imgsearchfn">
                    Image Search Functional
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/counter">
              <Counter></Counter>
            </Route>
            <Route path="/todos">
              <Todos></Todos>
            </Route>

            <Route path="/imgsearch">
              <ImageSearch></ImageSearch>
            </Route>

            <Route path="/imgsearchfn">
              <ImageSearchFn></ImageSearchFn>
            </Route>

            <Route path="/signin">
              <Signin></Signin>
            </Route>

            <Route path="/posts">
             <Posts></Posts>
            </Route>

            <Route path="/">
              <Counter></Counter>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
