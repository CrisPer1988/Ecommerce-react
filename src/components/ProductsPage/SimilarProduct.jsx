import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CardProduct from '../Home/CardProduct';

const SimilarProduct = ({category, productId}) => {
  const [filterProducts, setFilterProducts] = useState()
   const {products} = useSelector(state => state)
  
   useEffect(() => {
    if(products && category){
    setFilterProducts(products?.filter(product => product.category.id === category.id && product.id !== productId))
}
   }, [category, products])
   
 console.log(filterProducts);

    return (
    <div>
        <h2>Discover similar products</h2>
        <div>
            {
                filterProducts?.map(prod => ( 
                    
                    <CardProduct 
                    key={prod.id}
                    product={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SimilarProduct