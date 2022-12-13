import { useState } from 'react'
import {IProduct} from '../models'

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps)  {

    const [showDetail, setShowDetail] = useState(false)

    const showDetails = () =>{
        setShowDetail(!showDetail)
    }

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img className='w-1/6' src={product.image} alt={product.title} />
            <p> {product.title}  <b>(Rate: {product.rating.rate})</b></p>   
            <span className="font-bold">{product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}  </span>   
            {
                showDetail && <p>{product.description}</p> 
            } 
            <button className="border py-2 px-4 rounded bg-yellow-400" onClick={showDetails}>
            {
                showDetail ? "Hide" : "Detail"
            } 
            </button>
          
               
        </div>
    )
}