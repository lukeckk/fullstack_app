import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// router handling
const newRoute = createBrowserRouter(createRoutesFromElements(
  // path to home page and product
  <Route path='/' element={<App />}>
      {/* index specifies that HomeScreen is the homepage with path / */}
      <Route index={true} path='/' element={<HomeScreen />}></Route>
      <Route path='/product/:id' element={<ProductScreen />}></Route>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={newRoute} />
  </React.StrictMode>
);
