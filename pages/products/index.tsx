import Link from 'next/link';

import { ProductsInterface } from '@/interfaces/productInterface'

import { Header } from '@/components/Header';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { Footer } from '@/components/Footer';

const Product: React.FC<ProductsInterface> = ({ products }) => {
  	return (
		<MainLayout title="Store Application - Products">
			<>
				<div className="wrapper">
					<Header/>
					<div className="products">
						{
							products.map(({ id, title, price, image }) => (
								<div key={ id } className="product">
									<Link href={`products/${id}`}>
										<a>
											<div className="product__image">
												<img src={ image } alt={ title } />
											</div>
											<h2 className="product__title">{ title }</h2>
											<span className="product__price">{ price }</span>
										</a>	
									</Link>	
								</div>
							))
						}
					</div>
				</div>	
				<Footer/>
			</>	
		</MainLayout>	
	);
};


export async function getServerSideProps() {	
  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();
  return {
    props: {
      products: data
    }
  };
};

export default Product;

