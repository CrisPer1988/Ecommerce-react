import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'

const CardProduct = ({product}) => {
const dispatch = useDispatch()

   const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: 1,
            productId: product.id,
        }
        axios.post(url, data, config)
        .then(res => {
            console.log(res.data)
            dispatch(getCartThunk())
        })
        .catch(err => console.log(err.response))

        e.stopPropagation()
    }

  return (
    <article onClick={handleClick}>
        <header className='content__img'>
            <img src={product.images[0].url} alt="" />
        </header>
        <section>
            <header>
                <h3>{product.brand}</h3>
                <h2>{product.title}</h2>
            </header>
            <div>
                <div>Price</div>
                <div>${product.price}</div>
            </div>
            <button onClick={handleBtnClick}>
            <i className='bx bx-cart'></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct