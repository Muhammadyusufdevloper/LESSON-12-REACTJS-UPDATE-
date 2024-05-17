import React, { useState } from 'react'
import useFeatch from "../../hooks/useFetch"
import "./User.scss"
import axios from '../../api'
import UserModal from '../../components/modal/UserModal'

const User = ({ isAdmin, setReload }) => {
  let { data, loading, error } = useFeatch("/users")
  const [dataEdit,setDataEdit] = useState(null)
  const [productData, setProductData] = useState(null)

  const handleDelete = (id) => {
    if (confirm("Malumotni o'chirmoqchimisiz")) {
      axios
        .delete(`/users/${id}`)
        .then(res => {
          setReload(prev => !prev)
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        });
    }
  }

  const  handelEdit =(user)=>{
    setDataEdit(user)
  }

  const product = data?.map((user) => (
    <div className='user__card' key={user.id}>
      <div className='user__img-part'>
        <img src={user.image} alt={user.firstName} />
      </div>
      <div className='user__info-part'>
        <h3 className='user__info__title'>
          {user.firstName.slice(0, 1).toUpperCase() +
            user.firstName.slice(1).toLowerCase() + " " +
            user.lastName.slice(0, 1).toUpperCase() +
            user.lastName.slice(1).toLowerCase()}
        </h3>
        <p className='user__info__desc'>{user.email}</p>
        <p className='user__info__desc'>{user.phone}</p>
        {isAdmin && (
          <div className="product__info__btns">
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={()=>handelEdit(user)}>Edit</button>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <>
      {
        dataEdit ?
        <UserModal dataEdit={dataEdit} setReload={setReload} setDataEdit={setDataEdit}/>
        : <></>
      }
      <section className='product'>
        <div className='container'>
          <h1 className='user__title'>Users</h1>
          {loading ? (
            <div className="product__loading">
              <div className="product__loading__img-part loading__anime"></div>
              <div className="product__loading__info-part">
                <div className="loading__anime product__loading__info-part-div"></div>
                <div className="loading__anime product__loading__info-part-div"></div>
              </div>
              <div className="product__loading__img-part loading__anime"></div>
              <div className="product__loading__info-part">
                <div className="loading__anime product__loading__info-part-div"></div>
                <div className="loading__anime product__loading__info-part-div"></div>
              </div>
              <div className="product__loading__img-part loading__anime"></div>
              <div className="product__loading__info-part">
                <div className="loading__anime product__loading__info-part-div"></div>
                <div className="loading__anime product__loading__info-part-div"></div>
              </div>
              <div className="product__loading__img-part loading__anime"></div>
              <div className="product__loading__info-part">
                <div className="loading__anime product__loading__info-part-div"></div>
                <div className="loading__anime product__loading__info-part-div"></div>
              </div>
            </div>
          ) : (
            <div className='user__cards'>
              {product}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default User


