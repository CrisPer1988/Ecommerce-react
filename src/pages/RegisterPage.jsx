import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import "./styles/registerPage.css"


const RegisterPage = () => {

const {register, handleSubmit, reset} = useForm()

const submit = data => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    reset(defaultValues)

}

  return (
    <div className='content__register'>
        <form className='form__register' onSubmit={handleSubmit(submit)}>
        <h2>Sign Up</h2>
            <div className='content__input-register'>
                <label htmlFor="firstName">First name</label>
                <input className='input__register' {...register("firstName")} type="text" id='firstName' />
            </div>
            <div className='content__input-register'>
                <label htmlFor="lastName">Last name</label>
                <input className='input__register' {...register("lastName")} type="text" id='lastName' />
            </div>
            <div className='content__input-register'>
                <label htmlFor="email">Email</label>
                <input className='input__register' {...register("email")} type="email" id='email' />
            </div>
            <div className='content__input-register'>
                <label htmlFor="password">Password</label>
                <input className='input__register' {...register("password")} type="password" id='password' />
            </div>
            <div className='content__input-register'>
                <label htmlFor="phone">Phone</label>
                <input className='input__register' {...register("phone")} type="number" id='phone' />
            </div>
            <button className='btn__register'>Sign Up</button>
        </form>
    </div>
  )
}

export default RegisterPage