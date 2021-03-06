import Header from "./components/Header/Header";
import { Route, Redirect } from "react-router-dom";
import { Fragment} from "react";
import styles from "./app.module.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Menu from "./pages/menu/Menu";
import Modal from "./components/ui/modal/Modal";
import { useSelector } from "react-redux";
import Cart from "./components/cart/Cart";
function App() {
  const isCartShown = useSelector((state) => state.cart.isCartShown);
  const islogedin = useSelector((state) => state.login.islogedin);
  return (
    <Fragment>
      <Header />
      {isCartShown && (
        <Modal>
          <Cart />
        </Modal>
      )}

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/menu">
        <Menu />
      </Route>

      <Route path="/login">
        {islogedin && <Redirect to="/home" />}
        {!islogedin && <Login />}
      </Route>

      <Route path="*">
        <Redirect to="/home" />
      </Route>

      <Footer />
    </Fragment>
  );
}

export default App;
