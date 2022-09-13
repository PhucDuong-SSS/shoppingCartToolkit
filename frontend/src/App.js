import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
