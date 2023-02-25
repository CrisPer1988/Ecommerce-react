import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import "./styles/home.css"

const Home = () => {

  const {products} = useSelector(state => state)

  return (
    <div className='home__content'>
      <div>
        {
          products?.map(product => (
            <CardProduct 
            key={product.id} 
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home