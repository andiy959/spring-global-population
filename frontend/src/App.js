import React, { Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Main from "./component/Main/Main";
import Cities from "./component/Main/Cities";
import City from "./component/City/City";
import Country from "./component/Country/Country";

function App() {
  return (
    <Provider store={store.store}>
      <div className="App">
        <div className="App">
          <Router basename={"app"}>
            <Fragment>
              <Route exact path="/" component={Main} />
              <Route exact path="/" component={Cities} />

              <Switch>
                <Route exact path="/city" component={City} />
                <Route exact path="/country" component={Country} />
              </Switch>
            </Fragment>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
