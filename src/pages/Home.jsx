import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice';
import "./styles/home.css"


const Home = () => {

  const [categories, setCategories] = useState()

  const [fromTo, setFromTo] = useState({
    from:0,
    to: Infinity})

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

const handleSubmitPrice = e => {
  e.preventDefault()
  const from = +e.target.from.value.trim()
  const to = +e.target.to.value.trim()
  
  if(from && to){
    setFromTo({from, to})
  } else if(from && !to){
    setFromTo({from, to: Infinity})
  }else if(!from && to){
    setFromTo({from: 0, to})
  }else {
    setFromTo({from: 0, to: Infinity})
  }
}

const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to



  return (
    <div className='home__content'>
      <div className='content__filters'>
      <article className='content__category'>
        <header className='header__category'>
          <h3>Price</h3>
          <i className='bx bx-chevron-down'></i>
        </header>
        <hr />
        <form onSubmit={handleSubmitPrice}>
          <div className='content__input-filter'>
          <label htmlFor="from">From</label>
          <input type="number" id='from' />
          </div>
          <div className='content__input-filter'>
          <label htmlFor="to">To</label>
          <input type="number" id='to' />
          </div>
          <button className='btn__filter-price'>Filter Price</button>
        </form>
      </article>
      <article className='content__category'>
        <header className='header__category'>
          <h3>Category</h3>
          <i className='bx bx-chevron-down'></i>
        </header>
        <hr />
        <ul>
          <li onClick={() =>dispatch(getAllProductsThunk())}>All Products</li>
          {
            categories?.map(category => (
              <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
            ))
          }
        </ul>  
      </article>
      </div>



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
            products?.filter(filterProduct).map(product => (
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