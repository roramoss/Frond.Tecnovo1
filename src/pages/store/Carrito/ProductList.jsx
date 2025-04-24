import React from 'react'
import {data} from './carrito'

const ProductList = ({
    allProducts,
     setAllProducts,
      countProducts,
       setCountProducts,
       total,
       setTotal,
    }) => {

    const onAddProducts = (product) => {

if(allProducts.find(item =>item.id ===  product.id)){

    const products = allProducts.map(item => item.id === product.id ? {...item,quantity: item.quantity +1} 
        : item);

        setCountProducts(countProducts + product.quantity)
        setTotal(total + product.price * product.quantity)
        return setAllProducts([...products])
}

         setCountProducts(countProducts + product.quantity)
         setTotal(total + product.price * product.quantity)



        setAllProducts([...allProducts, product]);
        

    };
   console.log(allProducts)




  return (
    <div className='container-items'>
			

        {data.map(product=>(

            <div className='item' key={product.id}>

                <figure>
                    <img src={product.urlImage}
                     alt={product.nameProduc} />
                </figure>
                <div className='info-product'>
                    
                    <h2> {product.nameProduc}</h2>
                    <p className='price'>${product.price}</p>
                    <button onClick={() => onAddProducts(product)}>
                        Añadir al carrito</button>
                   
                </div>


            </div>

            
        ))}




    </div>
  )
}

export default ProductList
