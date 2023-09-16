import React from 'react'
import './Product.css'

const Product = ({item: {title, price, thumbnail, description}}) => {
  return (
    <div className='card'>
        <img src={thumbnail} alt="product img" />
        <div className="card-body">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Product