import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'
import "./styles/loginPage.css"

const LoginPage = () => {

    const [token, setToken] = useState()

   const {register, handleSubmit, reset} = useForm()

   const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
       axios.post(url, data)
       .then(res => {
        console.log(res.data)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("name", `${res.data.user.firstName} ${res.data.user.lastName}`)
    })
       .catch(err => {
        console.log(err)
        localStorage.clear()
    })
       reset(defaultValues)
   }

   const handleClick = () =>{
    localStorage.clear()
    setToken()
   }

   if(localStorage.getItem("name")){
    return <div className='content__login'>
        <div><i class='bx bxs-user'></i></div>
        <h2>{localStorage.getItem("name")}</h2>
        <button className='btn__login' onClick={handleClick}>Logout</button>
    </div>
   }else {
    
    return (
    <div>
        <form className='form__login' onSubmit={handleSubmit(submit)}>
            <h2>Welcome! Enter your email and password to continue</h2>
            <div className='example__login'>
                <h3>Test data</h3>
                <p><i class='bx bx-envelope'></i> john@gmail.com</p>
                <p><i class='bx bx-lock-alt'></i> john1234</p>
            </div>
            <div className='content__login-input'>
                <label htmlFor="email">Email</label>
                <input className='input__login' {...register("email")} type="email" id='email' />
            </div>
            <div className='content__login-input'>
                <label htmlFor="password">Password</label>
                <input className='input__login' {...register("password")} type="password" id='password' />
            </div>
            <button className='btn__login'>Login</button>
            <Link className='to__register-tittle' to="/user/register">Don't have an account?<span> Sign up</span></Link>
        </form>
        
    </div>
  )
}
}

export default LoginPage