import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  async function getData(){
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
    console.log(res.data.products);
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'10px'}}>
        {products.map(item=>{
            return <Product key={item.id} item={item}/>
        })}
    </div>
  )
}

export default AllProducts