import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'

const CardItem = ({prodInfo}) => {

   const dispatch = useDispatch()

    const handleDelete = () =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`

        axios.delete(url, config)
        .then(res => {
            console.log(res.data)
            dispatch(getCartThunk())
        })
        .catch(err => console.log(err))
       
    }

  return (
    <article>
        <header>
            <img src={prodInfo.product.images[0].url} alt="" />
        </header>
        <body>
            <h4>{prodInfo.product.brand}</h4>
            <h3>{prodInfo.product.title}</h3>
            <ul>
                <li>
                    <span>Unit Price</span>
                    <span> $ {prodInfo.product.price}</span>
                </li>
                <li>
                    <span>{prodInfo.quantity}</span>
                </li>    
            </ul>
        </body>
        <button onClick={handleDelete}><i class='bx bxs-trash' ></i></button>
    </article>
  )
}

export default CardItem