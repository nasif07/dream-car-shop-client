import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home';
import AddingProduct from './pages/AddingProduct';
import Mycart from './pages/Mycart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>this is error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("category.json")
      },
      {
        path: "/addproduct",
        element: <AddingProduct></AddingProduct>
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
