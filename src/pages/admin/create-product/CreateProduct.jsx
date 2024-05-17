import React, { useRef, useState } from "react";
import "./Create.scss";
import axios from "../../../api";

const CreateProduct = () => {
  const [loading,setLoding] = useState(false)
  let title = useRef()
  let price = useRef()
  let desc = useRef()

  const handleCreate = (e) => {
    setLoding(true)
    e.preventDefault();
    let productObj = {
      title:title.current.value,
      price:price.current.value,
      description:desc.current.value
    }
    axios
    .post("/products", productObj)
    .then((res) => {
        alert("Ma'lumot saqlandi")
        console.log(res);

      })
      .catch((err) => {
        console.error(err);
        toast.error("Ma'lumot saqlanmadi");
      })
      .finally(()=>setLoding(false))
  };
  return (
    <div className="create">
      <div className="container">
        <h2>Create Product</h2>
        <form onSubmit={handleCreate} className="create__form">
          <input 
          required
            // value={"Olma"}
            ref={title}
            type="text"
            placeholder="Title"
          />
          <input 
          required
            // value={"23"}
            ref={price}
            type="number"
            placeholder="Narxi"
          />
          <input 
          required
            // value={"Lorem ipsum, dolor"}
            ref={desc}
            type="text"
            placeholder="description"
          />
          <button disabled={loading}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
