import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  let {pathname} = useLocation()
  let isLogin = localStorage.getItem("x-auth-token")
  
  if(pathname.includes("register") || pathname.includes("admin")){
    return <></>
  }
  return (
    <header className='header'>
       <div className='container header__wrapper'>
          <Link to={"/"} className='header__logo'>Logo</Link>
            <ul className='header__list'>
              <li className='header__item'>
                <NavLink className='header__link' to={"/"}>Product</NavLink>
              </li>
              <li className='header__item'>
                <NavLink className='header__link' to={"/user"}>Users</NavLink>
              </li>
              <li className='header__item'>
                <NavLink className='header__link ' to={isLogin ? "/admin/create" : "/register"}>
                  {isLogin ? "Account" : "Login"}
                </NavLink>
              </li>
            </ul>
       </div>
    </header>
  )
}

export default Navbar