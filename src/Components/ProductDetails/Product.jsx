import React, { useEffect, useState } from 'react'
import { getAllProductsId } from '../../ApiSerivce/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Product.css'

function Product() {
    const { id } = useParams();

    const [product, setproductDetails] = useState({})

    useEffect(() => {
        const fetchProductsDetails = async () => {
            const data = await getAllProductsId(id)
            setproductDetails(data)
        }

        fetchProductsDetails()
    }, [id])



    return (
        <div className='productDetails-container'>
            <img src={product.image} alt="image" className='product-image' />

            <div className="product-info">
                <h2 className='product-title' >{product.title}</h2>
                <p className='product-desc'>{product.description}</p>
                <p className='product-price'>{product.price}</p>
                <button className='buyNow-Button'>Buy Now</button>
                <Link to='/'>
                    <button className='Back-Button'>GoHome</button>
                </Link>

            </div>

        </div>
    )
}

export default Product