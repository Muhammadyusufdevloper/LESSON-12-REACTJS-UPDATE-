import React from "react";
import "./Modal.scss";
import axios from "../../api";

const UserModal = ({ setDataEdit, dataEdit, setReload }) => {

  const handelForm = (e) => {
    e.preventDefault();
    let updetaData = {
      firstName: dataEdit.firstName,
      lastName: dataEdit.lastName,
      email: dataEdit.email,
      phone: dataEdit.phone,
    };
    axios
      .put(`/users/${dataEdit.id}`, updetaData)
      .then((response) => {
        console.log(response);
        setReload((prev) => !prev);
        setDataEdit(null)
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div onClick={() => setDataEdit(null)} className="overley"></div>
      <div className="modal">
        <button className="modal__close" onClick={() => setDataEdit(null)}>
          X
        </button>
        <form onSubmit={handelForm} className="modal__form">
          <div className="modal__wrapper">
            <div>
              <label htmlFor="fname">
                FirstName<span>*</span>
              </label>
              <input
                value={dataEdit.firstName}
                onChange={(e) =>
                  setDataEdit((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                required
                id="fname"
                type="text"
                placeholder="FirstName"
              />
            </div>
            <div>
              <label htmlFor="lname">
                LastName <span>*</span>
              </label>
              <input
                value={dataEdit.lastName}
                onChange={(e) =>
                  setDataEdit((prev) => ({ ...prev, lastName: e.target.value }))
                }
                required
                id="lname"
                type="text"
                placeholder="LastName"
              />
            </div>
            <div>
              <label htmlFor="Email">
                Email <span>*</span>
              </label>
              <input
                value={dataEdit.email}
                onChange={(e) =>
                  setDataEdit((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                id="reting"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone">
                PhoneNumber <span>*</span>
              </label>
              <input
                value={dataEdit.phone}
                onChange={(e) =>
                  setDataEdit((prev) => ({ ...prev, phone: e.target.value }))
                }
                required
                id="phone"
                type="tel"
                placeholder="PhoneNumber"
              />
            </div>
          </div>
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default UserModal;

