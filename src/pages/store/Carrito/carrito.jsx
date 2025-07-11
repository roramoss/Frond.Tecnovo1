import { useState } from 'react';


import ProductList from './ProductList'
import CarritoHeader from './Header';
import App from '../../../components/crund';
import ProductTable from '../../../components/productable';




function Carrito() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
		

		<CarritoHeader
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			
 

<h1 className='produ3'>Tienda online</h1>







			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>

		<ProductTable/>
			
		</>
	);
}

export default Carrito;