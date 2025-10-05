import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/auth/sign-in";
import { NotFound } from "./pages/404";

import { AuthLayout } from "./pages/_layouts/auth";
import { AppLayout } from "./pages/_layouts/app";

import { Dashboard } from "./pages/app/dashboard/dashboard";

import { CreateProductPage } from "./pages/product/create-product";
import { SearchProductPage } from "./pages/product/search-product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [{ path: "sign-in", element: <SignIn /> }],
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "dashboard", element: <Dashboard /> }, 
      {
        path: "products",
        children: [
          { path: "create", element: <CreateProductPage /> },
          { path: "search", element: <SearchProductPage /> },
        ],
      },
    ],
  },
]);
