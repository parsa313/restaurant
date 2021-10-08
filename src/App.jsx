import Header from "./components/Header/Header";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Fragment } from "react";
import styles from "./app.module.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/login">
        <div >
        <Login />

        </div>
        
      </Route>

      <Footer />
    </Fragment>
  );
}

export default App;