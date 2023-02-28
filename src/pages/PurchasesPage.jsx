import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'
import config from '../utils/getConfig'
import "./styles/purchasePage.css"

const PurchasesPage = () => {

    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

        axios.get(url, config)
        .then(res => setPurchases(res.data))
        .catch(err => console.log(err))
     
    }, [])
    console.log(purchases);

  return (
    <div>
        <div className='container__purchase-page'>
            {
                purchases?.map(purchase => (
                    <PurchaseCard 
                    key={purchase.id}
                    purchase={purchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage