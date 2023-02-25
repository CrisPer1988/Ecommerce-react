import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PotectedRoutes = () => {

    if(localStorage.getItem("token")){
        return <Outlet />
    } else {
        return <Navigate to="user/login"/>
        }
    }



export default PotectedRoutes