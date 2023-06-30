import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineThemes,
  ThemedLayoutV2,
} from "@refinedev/chakra-ui";

import { ChakraProvider } from "@chakra-ui/react";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";
import Product from "components/products/Product";
import ProductDetail from "components/products/product-detail/ProductDetail";
import "./App.css";
import Cart from "components/cart/Cart";
import Profile from "components/profile/Profile";
import Login from "components/auth/Login";
import Register from "components/auth/Register";
import ForgotPassword from "components/auth/ForgotPassword";
import CheckMail from "components/auth/CheckMail";
import ResetPassword from "components/auth/ResetPassword";
import ConfirmSignup from "components/auth/ConfirmSignup";
import History from "components/history/History";
import Admin from "components/admin/Admin";
import UserDetail from "components/admin/users/userdetails/UserDetail";
import OrderDetail from "components/admin/orders/order-detail/OrderDetail";
import Favorite from "components/favorites/Favorite";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ChakraProvider>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
            resources={[
              {
                name: "products",
                list: "/products",
                show: "/products/:id",
                create: "/products/create",
                edit: "/products/edit/:id",
              },
              {
                name: "cart",
                list: "/cart",
              },
              {
                name: "History",
                list: "/history",
              },
              {
                name: "admin",
                list: "/admin",
              },
            ]}
          >
            <Routes>
              <Route>
                <Route
                  index
                  element={<NavigateToResource resource="products" />}
                />
                <Route path="products">
                  <Route index element={<Product />} />
                  <Route path=":id" element={<ProductDetail />} />
                  <Route path="edit/:id" element={<ChakraUIInferencer />} />
                  <Route path="create" element={<ChakraUIInferencer />} />
                </Route>
                <Route path="cart">
                  <Route index element={<Cart />} />
                </Route>
                <Route path="profile">
                  <Route index element={<Profile />} />
                </Route>
                <Route path="auth">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="confirm" element={<ConfirmSignup />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="check-mail" element={<CheckMail />} />
                  <Route path="reset-password" element={<ResetPassword />} />
                </Route>
                <Route path="history" element={<History />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="admin">
                  <Route index element={<Admin />} />
                  <Route path="user/:id" element={<UserDetail />} />
                  <Route path="orders/:id" element={<OrderDetail />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ChakraProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
