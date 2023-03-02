import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../components/CardPages/CardItem';
import { getCartThunk } from '../store/slices/cart.slice';
import config from '../utils/getConfig';
import "./styles/cardPage.css"


const CartPage = () => {

   const dispatch = useDispatch()

    const [totalPrice, setTotalPrice] = useState(0)

    const { cart } = useSelector(state => state)

   console.log(cart);

   useEffect(() => {
   const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
   setTotalPrice(result)
   }, [cart])

   const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {}, config)
    .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
    })
    .catch(err => console.log(err))

   }
   

  return (
    <div>
        <div className='content__card-page'>
            {
                cart?.map(prodInfo => (
                    <CardItem
                    key={prodInfo.id}
                    prodInfo={prodInfo}
                     />
                ))
            }
        </div>
        <hr />
        <footer className='total__cart'>
            <h2><span>Total: $</span>{totalPrice}</h2>
            <button className='btn__buy' onClick={handlePurchase}>Buy this cart</button>
        </footer>
    </div>
  )
}

export default CartPage