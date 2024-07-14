import { useContext } from "react";
import { AuthContext } from "../assets/providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <div className="items-center flex justify-center"><progress className="progress w-56"></progress></div>
    }

    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;