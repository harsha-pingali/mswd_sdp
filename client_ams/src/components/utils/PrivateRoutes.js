import { Outlet,Navigate} from "react-router-dom";

const PrivateRoutes=()=>{
    let auth=localStorage.getItem("token")
    console.log(auth);
     if(auth!=null){
        return(
            <Outlet/>
        );
     }
     else{
        return(
            <Navigate to='/login'/>
        )
     }
}   
export default PrivateRoutes