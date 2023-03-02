import React from 'react'
import "./styles/purchaseCard.css"

const PurchaseCard = ({purchase}) => {
  return (
    <article className='container__puschase'>
        <header className='purchase__header'>
          <img src={purchase.product.images[2].url} alt="" />       
        </header>
        
          
        <div className='purchase__card-info'>
        <h2>{purchase.product.title}</h2>
          <h3>Quantity:{purchase.quantity}</h3>
          <h3>${purchase.product.price}</h3>
        </div>
    </article>
  )
}

export default PurchaseCard