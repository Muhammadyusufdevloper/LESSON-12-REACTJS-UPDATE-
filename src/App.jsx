import React from 'react'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import CreateProduct from './pages/admin/create-product/CreateProduct'
import ManageProducts from './pages/admin/manage-product/ManageProducts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './pages/users/User'
import CreateUser from './pages/admin/create-user/CreateUser'
import ManageUsers from './pages/admin/manage-user/MangeUsers'

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<Users/>}/>
          <Route path='/register' element={<Login/>}/>
          <Route path='/' element={<Auth/>}>
            <Route path='admin' element={<Admin/>}>
              <Route path='create' element={<CreateProduct/>}/>
              <Route path='manage' element={<ManageProducts/>}/>
              <Route path='createuser' element={<CreateUser/>}/>
              <Route path='mangeuser' element={<ManageUsers/>}/>
            </Route>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </>
  )
}

export default App