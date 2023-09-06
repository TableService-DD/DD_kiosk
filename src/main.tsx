import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ListPage from './pages/ListPage.tsx';
import ListStatus from './pages/ListStatus.tsx';
import ServeStatus from './pages/ServeStatus.tsx';
import ServeDone from './pages/ServeDone.tsx';
import Sales from './pages/Sales.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'order-list',
        element: <ListPage />,
      },
      {
        path: 'order-status',
        element: <ListStatus />,
      },
      {
        path: 'serving-waiting',
        element: <ServeStatus />,
      },
      {
        path: 'serving-done',
        element: <ServeDone />,
      },
    ],
  },
  {
    path: '/sales',
    element: <Sales />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
