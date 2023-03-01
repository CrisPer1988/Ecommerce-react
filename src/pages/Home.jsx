import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import { getProductsByName } from '../store/slices/products.slice';
import "./styles/home.css"


const Home = () => {

  const [categories, setCategories] = useState()

 const dispatch = useDispatch()

  
  const {products} = useSelector(state => state)

  const handleSubmit = e =>{
    e.preventDefault()
    const input = e.target.inputSearch.value.trim().toLowerCase()
    dispatch(getProductsByName(input))
    e.target.inputSearch.value = ""
  }

 useEffect(() => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
  axios.get(url)
  .then(res => setCategories(res.data))
  .catch(err => console.log(err))
 }, [])
 
 console.log(products);

 const handleClickCategory = id => {
  dispatch(getProductsByName(id, true))

 }
 

  return (
    <div className='home__content'>
      <article className='content__category'>
        <header className='header__category'>
          <h3>Category</h3>
          <i className='bx bx-chevron-down'></i>
        </header>
        <hr />
        <ul>
          {
            categories?.map(category => (
              <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
            ))
          }
        </ul>     
      </article>




      {/* <form onSubmit={handleSubmit}>
        <input id='inputSearch' type="text" />
        <button><i className='bx bx-search-alt-2'></i></button>
      </form> */}
{/* 
      <article>
        <header>
        <h3>Category</h3>
        <i className='bx bx-chevron-down'></i>
        </header>
        <ul>
          {
            categories?.map(category => (
              <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
            ))
          }
        </ul>
        
      </article> */}
      <div className='content__body-home'>
        <form className='form__search' onSubmit={handleSubmit}>
          <input className='input__search' id='inputSearch' type="text" />
          <button><i className='bx bx-search-alt-2'></i></button>
        </form>
        <div className='content__products-home'>
          {
            products?.length === 0 ?
            <h1>X This product does'n exist X</h1>
          :
            products?.map(product => (
              <CardProduct 
                key={product.id} 
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home