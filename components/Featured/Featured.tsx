import React from 'react'

import { ProductsInterface, ProductInterface } from '@/interfaces/productInterface'
import Link from 'next/link';

const Featured: React.FC<ProductsInterface> = ({ products }) => {
	return (
		<section className="featured">
			<div className="wrapper">
                <div className="featured__container">
                    {
                        products && products.map(({ id, title, price, image }) => (
                            <Link href={`products/${id}`} className="featured__product" key={ id}>
                                <a>
                                    <div className="featured__image">
                                        <img src={ image } alt={ title } />
                                    </div>
                                    <div className="featured__info">
                                        <h3 className="featured__title">{ title }</h3>
                                        <span className="featured__price">{ price }</span>
                                    </div>
                                </a>
                            </Link>
                        ))
                    }     
                </div>
            </div>
		</section>
	);
};

export default Featured;

