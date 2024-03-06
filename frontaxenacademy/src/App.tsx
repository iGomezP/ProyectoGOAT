import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/Admin/Login'
import Register from './components/Admin/Register';
import Index from './components/General/Index';
import OuiCatalog from './components/OuiCatalog/OuiCatalog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/index" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/oui" element={<OuiCatalog />} />
    </>
  )
);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
