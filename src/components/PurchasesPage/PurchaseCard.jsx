import React from 'react'
import "./styles/purchaseCard.css"

const PurchaseCard = ({purchase}) => {
  return (
    <article className='container__puschase'>
        <header className='purchase__header'>
            <img src={purchase.product.images[0].url} alt="" />
        </header>
        <h2>{purchase.product.title}</h2>
        <div>Quantity:{purchase.quantity}</div>
        <div>${purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard