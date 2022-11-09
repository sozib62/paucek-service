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
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/reviews',
          element: <MyReviews></MyReviews>
        },
        {
          path: '/service',
          element: <AddServices></AddServices>
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
