import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { ProductInterface } from '@/interfaces/productInterface'
import { addProduct } from '@/store/slices/productSlice'

import { Header } from '@/components/Header';
import { MainLayout } from '@/components/Layouts/MainLayout';

import { formatCurrency } from '@/helpers/currency'


const ProductDetail: React.FC<ProductInterface> = ({ product: { id, title, image, description, price } }) => {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState<number>(0)
	const [buttonEnable, setButtonEnable] = useState<boolean>(true)

	useEffect(() => {
		quantity > 0 ? setButtonEnable(false) : setButtonEnable(true)
	},[quantity])

	const addProductQuantity = () => { 
		setQuantity(prev => prev + 1) 
	}
	const removeProductQuantity = () => { 
		setQuantity(prev => prev > 0 ? prev - 1 : 0) 
	}
	const handleQuantity = (event: any) => {
		setQuantity(Number(event.target.value));
	};

	const addProductToCart = () => {
		if(quantity > 0){
			dispatch(addProduct({id, title, price, image, quantity}))
			setQuantity(0)
		}
	}

	return (
		<MainLayout title={`Store Application - ${ title }`}>
			<div className="product_detail">
				<Header/>
				<div className="wrapper">
					<div className="product_detail__container">
						<div className="product_detail__image">
							<img src={ image} alt={ title } />
						</div>
						<div className="product_detail__info">
							<h2 className="product_detail__title">{ title }</h2>
							<p className="product_detail__description">{ description }</p>
							<span className="product_detail__price">{ formatCurrency(price) }</span>
							<div className="product_detail__quantity">
								<button onClick={ removeProductQuantity }>-</button>
								<input type="number" onChange={handleQuantity} value={ quantity }/>
								<button onClick={ addProductQuantity }>+</button>
							</div>
							<button className="product_detail__button" disabled={buttonEnable} onClick={ addProductToCart }>Add to cart</button>
						</div>
					</div>	
				</div>	
			</div>
		</MainLayout>	
	)
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	let product = []
	const { id } = params as { id: string };
	try {
	  const res = await fetch(`${process.env.API_URL}/products/${ id  }`)
	  product = await res.json()
	} catch (err) {
	  console.log(err)
	}
  
	if (!product) {
	  return {
		notFound: true,
	  }
	}
  
	return {
	  props: {
		product,
	  }
	}
}
  
