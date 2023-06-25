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

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
        <ChakraProvider theme={RefineThemes.Blue}>
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
                name: "checkout",
                list: "/checkout",
              },
              {
                name: "checkout",
                list: "/checkout",
              },
              {
                name: "payment",
                list: "/paymemt",
              },
              {
                name: "success",
                list: "/success",
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
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
