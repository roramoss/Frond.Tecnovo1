
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header.component';


const CarritoHeader =  ({
	allProducts,
	setAllProducts, 
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};


const navigate = useNavigate();



  return (
    <>
<div className="flex justify-between items-center px-6 py-3 bg-black text-white shadow-lg sticky top-0 z-50">
    <img
        src="src/assets/logo_transparent.png"
        width="90"
        height="90"
        className="h-30 w-50"
        alt="logo"
    />

    <div className='flex items-center space-x-6'>
        {/* Link Cerrar Sesión (CORREGIDO: text-gray-600 -> text-white) */}
        <li>
            <a 
                href="/auth/login" 
                className="text-white hover:text-indigo-600 font-medium transition duration-200"
            > 
                Cerrar Sesion
            </a>
        </li>

        {/* Icono del Carrito (EL ELEMENTO CONTENEDOR CLAVE) */}
        <div
            className='relative cursor-pointer hover:scale-105 transition duration-150'
            onClick={() => setActive(!active)}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                // CORREGIDO: stroke-gray-600 -> stroke-white
                className='h-7 w-7 stroke-white hover:stroke-indigo-600' 
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
            </svg>
            
            {/* Contador de Productos */}
            <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white'>
                <span id='contador-productos'>{countProducts}</span> 
            </div>

            {/* Contenedor del Carrito Desplegable (CORREGIDO) */}
            <div
                className={`absolute right-0 mt-8 w-80 bg-white border border-gray-100 shadow-2xl rounded-lg p-4 z-40 transition-all duration-300 ${
                    active ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                {allProducts.length ? (
                    <>
                        <div className='max-h-80 overflow-y-auto space-y-4'>
                            {allProducts.map(product => (
                                <div className='flex justify-between items-center border-b border-gray-100 pb-2' key={product.id}>
                                    <div className='flex flex-col space-y-0.5'>
                                        <span className='text-sm font-semibold text-gray-700'>
                                            {product.quantity}x
                                        </span>
                                        <p className='text-gray-800 text-base font-medium'>
                                            {product.nameProduc}
                                        </p>
                                        <span className='text-sm text-indigo-600 font-bold'>
                                            ${product.price}
                                        </span>
                                    </div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='h-5 w-5 stroke-red-500 cursor-pointer hover:scale-110 transition'
                                        onClick={() => onDeleteProduct(product)}
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-between items-center pt-4 border-t border-gray-200 mt-4 font-bold text-lg'>
                            <h3>Total:</h3>
                            <span className='text-indigo-600'>${total}</span>
                        </div>

                        <button 
                            className='w-full py-2 mt-4 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200' 
                            onClick={onCleanCart}
                        >
                            Vaciar Carrito
                        </button>
                        
                        <button 
                            className='w-full py-2 mt-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200' 
                            onClick={() => navigate('*')}
                        > 
                            Comprar ahora
                        </button>
                        
                    </>
                ) : (
                    <p className='text-center text-gray-500 italic py-6'>El carrito está vacío</p>
                )}
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default CarritoHeader;

