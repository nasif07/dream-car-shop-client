import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const DetailsPrivate = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-bars loading-lg mx-auto"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>


};

export default DetailsPrivate;