import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import { logout } from "./redux/actions/userActions";

import IdleTimer from "react-idle-timer";
import { IdleTimeOutModal } from "./components/IdleTimeOutModal";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  const [timeout] = useState(1000 * 60 * 60);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let idleTimer = null;

  const onAction = () => {
    setIsTimedOut(false);
  };

  const onActive = () => {
    setIsTimedOut(false);
  };

  const onIdle = () => {
    if (!isTimedOut) {
      setShowModal(true);
      idleTimer.reset();
      setIsTimedOut(true);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setShowModal(false);
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      {userInfo && (
        <>
          <IdleTimer
            ref={(ref) => {
              idleTimer = ref;
            }}
            element={document}
            onActive={onActive}
            onIdle={onIdle}
            onAction={onAction}
            debounce={250}
            timeout={timeout}
          />

          <IdleTimeOutModal
            showModal={showModal}
            handleClose={handleCancel}
            handleLogout={handleLogout}
          />
        </>
      )}

      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
