import React from 'react'
import "./products.css"
const Products = ({productItem}) => {

    return (
        <div className="products">
            {productItem.map((product)=>(
                <div className="product-card">
                    <div>
                        <img className="product-image" src={product.image} alt={product.name} />
                    </div>
                    <div className="product-name">Name: 
                        {product.name}
                    </div>
                    <div className="product-price">Price: 
                        {product.price}
                    </div>
                    <div> 
                        <button className="product-add-button">Add to Cart</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Products
