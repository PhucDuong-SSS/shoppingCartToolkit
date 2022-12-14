import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import productsReducer, { productFetch } from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import CartReducer from "./features/cartSlice";
import { ToastContainer } from "react-toastify";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (detDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productFetch());

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
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
