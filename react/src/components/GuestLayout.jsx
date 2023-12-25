import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function GuestLayout(){
  const {user,token} = useStateContext()
  if(token){
    return <Navigate to="/" />
  }
  return(
    <div>
      <div>
        {/*For guest user only*/}
        <Outlet />
      </div>
    </div>
  )
}
