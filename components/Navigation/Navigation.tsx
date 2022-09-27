import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import { getCartQuantity } from '@/store/slices/productSlice'
import { setStatusAside, getAsideState } from '@/store/slices/asideSlice'

export interface NavigationInterface {
	theme: string
}

const Navigation: React.FC<NavigationInterface> = ({ theme }) => {
	const dispatch = useDispatch()
	const quantityCart = useSelector(getCartQuantity)
	const asideState = useSelector(getAsideState)
	
	const openCartAside = (state: boolean) => {
		dispatch(setStatusAside(state))
	}
	return (
		<div className='navigation'>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
				{
					theme === 'header' ? (
						<a href="#" onClick={ () => openCartAside(!asideState) } >
							Cart ({ quantityCart })
						</a>
					) : null	
				}		
			</nav>
		</div>
	);
};

export default Navigation;

