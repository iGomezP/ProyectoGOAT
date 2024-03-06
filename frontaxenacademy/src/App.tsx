import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/Admin/Login'
import Register from './components/Admin/Register';
import Index from './components/General/Index';
import OuiCatalog from './components/OuiCatalog/OuiCatalog';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom-toast-container.css';

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
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        transition={Bounce}
        closeButton={false}
        limit={3}
      />
    </>
  )
}

export default App
