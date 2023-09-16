import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dog = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div>Dog</div>

        <button onClick={()=>navigate('/allProducts')}>Back to Products</button>
    </div>
  )
}

export default Dog