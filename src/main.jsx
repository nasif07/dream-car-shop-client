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
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Registration from './pages/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
