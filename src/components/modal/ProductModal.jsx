import React from "react";
import "./Modal.scss";
import axios from "../../api";

const ProductModal = ({ setDataEdit, dataEdit, setReload }) => {
  const handelForm = (e) => {
    e.preventDefault();
    let updetaData = {
      title: dataEdit.title,
      description: dataEdit.description,
      rating: dataEdit.reting,
      price: dataEdit.price,
    };
    axios
      .put(`/products/${dataEdit.id}`, updetaData)
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
              <label htmlFor="title">
                Title <span>*</span>
              </label>
              <input
                value={dataEdit.title}
                onChange={(e) =>
                  setDataEdit((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                id="title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <label htmlFor="text">
                Text <span>*</span>
              </label>
              <input
                value={dataEdit.description}
                onChange={(e) =>
                  setDataEdit((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
                id="text"
                type="text"
                placeholder="Text"
              />
            </div>
            <div>
              <label htmlFor="reting">
                Reting <span>*</span>
              </label>
              <input
                value={dataEdit.rating}
                onChange={(e) =>
                  setDataEdit((prev) => ({
                    ...prev,
                    rating: e.target.value,
                  }))
                }
                required
                id="reting"
                type="text"
                placeholder="Reting"
              />
            </div>
            <div>
              <label htmlFor="price">
                Price <span>*</span>
              </label>
              <input
                value={dataEdit.price}
                onChange={(e) =>
                  setDataEdit((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
                required
                id="price"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default ProductModal;
