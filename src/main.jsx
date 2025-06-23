import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import AuthForm from './Authform';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <AuthForm /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
