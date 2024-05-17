
import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import User from "../../users/User";


const ManageUsers = () => {
  const [reload, setReload] = useState(true);
  const { data, loading, error } = useFetch("/users", reload);

  return (
    <div>
      <User setReload={setReload} isAdmin={true} />
    </div>
  );
};

export default ManageUsers;