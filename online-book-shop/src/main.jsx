import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import NotFound from "./NotFound.jsx";
import BoookDetails from "./components/shared/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children:[
      {
        path: "/book/:bookId",
        element: <BoookDetails></BoookDetails>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
