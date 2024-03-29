import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = () => {
    const user = useSelector((state) => state.users.isAuth)
    // return localStorage.getItem('isAuth') ? <Outlet /> : <Navigate to="/sign-in" />
    return <Outlet /> 
}

export default ProtectedRoutes