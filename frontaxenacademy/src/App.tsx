import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/admin/Login'
import Register from './components/admin/Register';
import Index from './components/general/Index';
import OuiCatalog from './components/OuiCatalog/OuiCatalog';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom-toast-container.css';
import ProtectedRoutes from './components/router/ProtectedRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/oui" element={<OuiCatalog />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/index" element={<Index />} />
      </Route>
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
