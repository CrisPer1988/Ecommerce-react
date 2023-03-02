import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import "./styles/productsInfo.css"

const ProductInfo = ({product}) => {

   const dispatch = useDispatch()

    const [counter, setCounter] = useState(1)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleMinnus = () => {
        if (counter > 1){  
        setCounter(counter - 1)
        }
    }

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: counter,
            productId: product.id
        }
        axios.post(url, data, config)
        .then(res =>{ 
            console.log(res.data)
            dispatch(getCartThunk())
            setCounter(1)
        })
        .catch(err => console.log(err.response))
    }

  return (
    <article className='content__products-info'>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer className='footer__products-info'>
            <section className='info__products'>
                <h4>Price</h4>
                <span className='price'>${product?.price}</span>
            </section>
            <section>
                <h4>Quantity</h4>
                <div className='content__counter'>
                    <div onClick={handleMinnus}>-</div>
                    <div>{counter}</div>
                    <div onClick={handleAdd}>+</div>
                </div>
            </section>
            <button onClick={handleAddCart}>
            <i class='bx bx-cart'></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo