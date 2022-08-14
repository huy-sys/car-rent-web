import React from 'react'
import { ProductCard } from '../../components'
import "./PopularCar.css"

const PopularCar = () => {
  return (
    <div className='app__popular'>
        <div className="app__popular-heading">
            <span>Popular Car</span>
            <button><a href='/'>View all</a></button>
        </div>
        <div className="app__popular-listItem">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default PopularCar