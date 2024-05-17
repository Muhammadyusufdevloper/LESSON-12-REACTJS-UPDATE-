import { IoIosMenu } from "react-icons/io";
import React from 'react'
import "./AdminHeader.scss"

const AdminHeader = ({setClose}) => {
  return (
    <div className="admin__header">
          <div className="container admin__header__wrapper">
              <button className="admin__header__btn" onClick={()=> setClose(p => !p)}><IoIosMenu/></button>
              <div>
                <p>John Doe</p>
              </div>
          </div>
    </div>
  )
}

export default AdminHeader