import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router";
import { RootState } from "../redux/store"
import { loginSuccess } from '../redux/features/system';

const useAuth = () => {

    const dispatch = useDispatch();
    const { login } = useSelector((state: RootState) => state.system);

    if (localStorage.getItem("refreshToken")) {
        dispatch(loginSuccess());
        const login = true;
        return login;
    }
    return login;
}

const ProtectedRoute = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to={"/login"} replace state={{ from: location }} />
}

export default ProtectedRoute