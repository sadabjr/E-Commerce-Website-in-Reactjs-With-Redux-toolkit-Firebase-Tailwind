import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/noPage/noPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProducts from "./pages/admin/pages/AddProducts";
import UpdateProducts from "./pages/admin/pages/UpdateProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <protectedRouteUser>
                <Order />
              </protectedRouteUser>
            }
          />
          <Route
            path="/cart"
            element={
              <protectedRouteUser>
                <Cart />
              </protectedRouteUser>
            }
          />
          <Route
            path="/dashboard"
            element={
              <protectedRouteAdmin>
                <Dashboard />
              </protectedRouteAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/productinfo/:id"
            element={
              <protectedRouteUser>
                <ProductInfo />
              </protectedRouteUser>
            }
          />
          <Route
            path="/addproduct"
            element={
              <protectedRouteAdmin>
                <AddProducts />
              </protectedRouteAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <protectedRouteAdmin>
                <UpdateProducts />
              </protectedRouteAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// user

export const protectedRouteUser = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin
export const protectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
