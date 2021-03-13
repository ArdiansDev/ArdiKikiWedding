import "./App.css";

import React, {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  // const DefaultContainer = () => <div></div>;

  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
