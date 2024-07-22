import Navbar from './components/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/menu';

import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  }
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
