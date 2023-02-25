import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../components/CardPages/CardItem';


const CartPage = () => {

   const { cart } = useSelector(state => state)

   console.log(cart);

  return (
    <div>
        <div>
            {
                cart?.map(prodInfo => (
                    <CardItem
                    key={prodInfo.id}
                    prodInfo={prodInfo}
                     />
                ))
            }
        </div>
    </div>
  )
}

export default CartPage