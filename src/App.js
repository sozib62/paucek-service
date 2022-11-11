import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import AddServices from './pages/AddServices/AddServices';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyReviews from './pages/MyReviews/MyReviews';
import Register from './pages/Register/Register';
import ShowAllService from './pages/ShowAllService/ShowAllService';
import ShowDetails from './pages/ShowDetails/ShowDetails';
import PrivateRoute from './Routes/PriviteRoute/PriviteRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/services',
          element: <ShowAllService></ShowAllService>,
          loader: () => fetch('https://assignment-11-server-site-nine.vercel.app/services')
        },
        {
          path: '/services/:id',
          element: <ShowDetails></ShowDetails>,
          loader: ({ params }) => fetch(` https://assignment-11-server-site-nine.vercel.app/services/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/reviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/addService',
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        },
      ]
    }
  ])


  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
