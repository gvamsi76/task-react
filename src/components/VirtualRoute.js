import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Spinner from './Spinner'

const VirtualRoute = () => {
   const {loggedIn ,checkingStatus} =useAuth()

   if(checkingStatus){
       return <Spinner />
   }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
}
export default  VirtualRoute;