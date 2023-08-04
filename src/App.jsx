import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Authhentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import ProductAddPage from "./components/productAdd";
import MainSellerDash from "./components/sellerDashboard/main";
import SettingsSeller from "./components/sellerDashboard/settings";
import SellerDashboardPrivateRoute from "./route/DashboardRoute";
import Products from "./components/sellerDashboard/products";
import ProductUpdatePage from "./components/sellerDashboard/UpdateProduct";
import ChatInterface from "./components/sellerDashboard/chat";
import ProductDetails from "./components/productDetail";
import PrivateRoute from "./route/privateRoute";
import Account from "./pages/Account";
import CartComp from "./components/Account/cartComp";
import ChatUser from "./components/Account/chatUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Authhentication />}></Route>
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account>
                <CartComp />
              </Account>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/account/chat"
          element={
            <PrivateRoute>
              <Account>
                <ChatUser />
              </Account>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/account/settings"
          element={
            <PrivateRoute>
              <Account>
                <SettingsSeller />
              </Account>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/product/details/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <MainSellerDash />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/product/add"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <ProductAddPage />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/update/product/:id"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <ProductUpdatePage />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/chat"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <ChatInterface />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/products"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <Products />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/settings"
          element={
            <SellerDashboardPrivateRoute>
              <Dashboard>
                <SettingsSeller />
              </Dashboard>
            </SellerDashboardPrivateRoute>
          }
        ></Route>

        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
