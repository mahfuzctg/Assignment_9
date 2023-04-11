import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Features from './Components/Features/Features';
import Blog from './Components/Blog/Blog';
import Charts from './Components/Charts/Charts';
import JobDetails from './Components/JobDtails/JobDetails';
const router = createBrowserRouter([
  {
   
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('Category.json'),
        
      },
      {
          path: "/jobDetails/:id",
          element: <JobDetails></JobDetails>,
          loader: () => fetch("/Features.json")
          
      },
     {
       path: "/statistic",
       element: <Charts></Charts>
     }
    ]
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
