import React, { useRef, useState } from "react";
import "../create-product/Create.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    setLoading(true);

    axios
      .post("/users", newUser)
      .then((res) => {
        console.log(res);
        toast.success("Ma'lumot saqlandi");
        firstName.current.value = "";
        lastName.current.value = "";
        email.current.value = "";
        phone.current.value = "";
      })
      .catch((err) => {
        console.error(err);
        toast.error("Ma'lumot saqlanmadi");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="crate">
      <div className="container">
        <h2>CreateUser</h2>
        <form onSubmit={handleCreate} className="create__form">
          <input
            ref={firstName}
            type="text"
            placeholder="firstName"
            required
            // value={"Aliy"}
          />
          <input
            ref={lastName}
            type="text"
            placeholder="lastName"
            required
            // value={"Valiyev"}
          />
          <input
            ref={email}
            type="email"
            // value={"salom@qaley.com"}
            placeholder="email"
            required
          />
          <input
            ref={phone}
            type="tel"
            placeholder="phone"
            // value={"+998 99 999 9999"}
            required
          />
          <button disabled={loading} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
