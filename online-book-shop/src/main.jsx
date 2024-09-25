import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Books from "./Books/Books.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import BookDetails from "./BookDetails/BookDetails.jsx";
import Home from "./Home/Home.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx"
import About from "./About/About.jsx"
import Blog from "./Blog/Blog.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Books></Books>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
