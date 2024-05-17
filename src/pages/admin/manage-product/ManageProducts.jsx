import { useState } from "react"

import  useFeatch  from "../../../hooks/useFetch"
import Products from "../../../components/products/Products"

const ManageProducts = () => {
  const [reload,setReload] = useState(true) 
  let {data,loading,error} = useFeatch("/products",reload)
  return (
    <div>
      <Products setReflashData={setReload} isAdmin={true} data={data}/>

    </div>
  )
}

export default ManageProducts