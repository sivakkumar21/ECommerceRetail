import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development" ? "http://localhost:4000/api/v1" : "/";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Routes>
    <Route path="/" element={<App />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}

      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
    </Route>
    /*create nested routes here */

    //

    // </Routes>
  )
);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
