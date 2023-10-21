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
import AuthProvider, { AuthContext } from './provider/AuthProvider';
import PrivateRoute from './privateRoute/privateRoute';
import CarDetailes from './components/CarDetailes';
import DetailsPrivate from './privateRoute/DetailsPrivate';
import CartPrivate from './privateRoute/CartPrivate';
import UpdateForm from './components/UpdateForm';
import { ThemeProvider } from '@material-tailwind/react';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json")
      },
      {
        path: "/addproduct",
        element: <PrivateRoute>
          <AddingProduct></AddingProduct>
        </PrivateRoute>

      },
      {
        path: "/updateproduct/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({params}) => {
          // console.log(params);
          return fetch(`https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcars/${params.id}`)
        }
      },
      {
        path: "/mycart",
        element: <CartPrivate><Mycart></Mycart></CartPrivate>,
        loader: () => fetch(`https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcart`)
      },
      {
        path: "/allcars/:id",
        element: <AllCars></AllCars>,
        loader: () => fetch(`https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcars`)
      },
      {
        path: "/allcars/carDetailes/:id",
        element: <DetailsPrivate>
          <CarDetailes></CarDetailes>
        </DetailsPrivate>,
        loader: () => fetch(`https://dream-car-shop-server-i06vlcvw9-nasif07s-projects.vercel.app/allcars`)
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
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
