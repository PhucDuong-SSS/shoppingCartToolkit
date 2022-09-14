import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import productsReducer from "./features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
