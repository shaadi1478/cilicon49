import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ElectronicsShop from "./Components/ElectronicsShop/ElectronicsShop.jsx";
import ProductDetails from "./Components/ElectronicsShop/ProductDetails.jsx";
import { AppProvider } from './Components/Context/CartContext.jsx';
import TrackOrder from "./Components/TrackOrder/TrackOrder.jsx";
import ProductComparison from "./Components/ProductComparison/ProductComparison.jsx";
import CustomerSupport from "./Components/CustomerSupport/CustomerSupport.jsx";
import SupportDropdown from "./Components/SupportDropdown/SupportDropdown.jsx";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage.jsx";
import OrderSuccess from "./Components/OrderSuccess/OrderSuccess.jsx";

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import Login from "./Components/Auth/Login.jsx";
import Register from "./Components/Auth/Register.jsx";
import Profile from "./Components/Auth/Profile.jsx";
import { AuthProvider } from "./Components/Context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      { path: "shop", element: <ElectronicsShop /> },

      { path: "product/:id", element: <ProductDetails /> },

      { path: "trackorder", element: <TrackOrder /> },

      { path: "compair", element: <ProductComparison /> },

      { path: "support", element: <CustomerSupport /> },

      { path: "help", element: <SupportDropdown /> },
      {
        path: "/order-success",
        element: <OrderSuccess />
      },

      // 🔐 PROTECTED CHECKOUT
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "order-success",
        element: (
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        ),
      },

      // 🔐 AUTH ROUTES
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AppProvider>
    </AuthProvider>
  </StrictMode>
);
