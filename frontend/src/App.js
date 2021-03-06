import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "./redux/actions/userActions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";
import OrderListPage from "./pages/OrderListPage";

import IdleTimer from "react-idle-timer";
import { IdleTimeOutModal } from "./components/IdleTimeOutModal";

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
            <Route path="/search/:keyword" component={HomePage} exact />
            <Route path="/page/:pageNumber" component={HomePage} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomePage}
            />

            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />

            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />

            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderPage} />
            <Route path="/admin/orderlist" component={OrderListPage} />

            <Route path="/admin/userlist" component={UserListPage} />
            <Route path="/admin/user/:id/edit" component={UserEditPage} />

            <Route path="/product/:id" component={ProductPage} />
            <Route
              path="/admin/productlist"
              component={ProductListPage}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListPage}
              exact
            />
            <Route path="/admin/product/:id/edit" component={ProductEditPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
