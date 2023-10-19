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
import AllCars from './components/AllCars';

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
      },
      {
        path: "/allcars/:id",
        element: <AllCars></AllCars>,
        loader: () => fetch(`http://localhost:5000/allcars`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
