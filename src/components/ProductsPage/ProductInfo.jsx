import React, { useState } from 'react'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleMinnus = () => {
        if (counter > 1){  
        setCounter(counter - 1)
        }
    }

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <section>
                <h4>Price</h4>
                <span>${product?.price}</span>
            </section>
            <section>
                <h4>Quantity</h4>
                <div>
                    <div onClick={handleMinnus}>-</div>
                    <div>{counter}</div>
                    <div onClick={handleAdd}>+</div>
                </div>
            </section>
            <button>Add to cart
            <i class='bx bx-cart'></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo