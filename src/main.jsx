import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Charts from './Components/Charts/Charts';

import Error from './Error/Error';
import JobDetails from './Components/JobDtails/JobDetails';
import Blog from './Components/Blog/Blog';
import SingleDetails from './Components/SingleDetails/SingleDetails';
import Apply from './Components/Apply/Apply';
const router = createBrowserRouter([
  {
   
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Category.json'),
        
      },
      {
          path: "/jobDetails/:id",
          element: <JobDetails></JobDetails>,
          loader: () => fetch("/Features.json")
          
      },
     {
       path: "/statistic",
       element: <Charts></Charts>
     },
     {
      path: "/applied",
      element: <Apply></Apply>,
      loader: () => fetch("/Features.json")
     },
     {
      path: '/blog',
      element:<Blog></Blog>
    }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
       <RouterProvider router={router} />
  </>,
)
