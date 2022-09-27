import { useSelector, useDispatch  } from 'react-redux';

import { getAsideState, setStatusAside } from '@/store/slices/asideSlice'
import { getCart, removeProduct, removeAllProducts, getTotal } from './../../store/slices/productSlice'

import { ProductCartInterface } from '@/interfaces/productInterface';

export interface AsideInterface {}

const Aside: React.FC<AsideInterface> = () => {
	const dispatch = useDispatch()
	const asideState = useSelector(getAsideState)
	const cart = useSelector(getCart)
	const total = useSelector(getTotal)

	const deleteProduct = (id: number) => {
		dispatch(removeProduct(id))
	}

	const closeAside = () => {
		dispatch(setStatusAside(false))
	}

	const goToCheckout = () => {
		dispatch(removeAllProducts())
	}

	return (
		<div className={`aside ${ asideState ? "open" : "" } `}>
			<a href="#" className="aside__close" onClick={ closeAside }>x</a>
			{
				cart.length > 0 ? (
					<ul className="aside__products">
						{
							cart.map(({id = 0, title, image, price, quantity}: ProductCartInterface) => (
								<li key={id} className="product">
									<div className="product__image">
										<img src={ image } alt={ title } />
									</div>
									<div className="product__info">
										<h3 className="product__title" >{ title }</h3>
										<span className="product__price">{ price } x { quantity }</span>
										<button className="product__remove" onClick={ () => deleteProduct(id) }>Remove</button>
									</div>
								</li>
							))
						}
					</ul>
				) : ( <p className="aside__empty">Cart Empty</p> )
			}
			<div className="aside__total">
				<strong>Total: </strong>{ total }
			</div>
			<button className="aside__checkout" onClick={ goToCheckout }>Checkout</button>
		</div>
	)
}

export default Aside;

