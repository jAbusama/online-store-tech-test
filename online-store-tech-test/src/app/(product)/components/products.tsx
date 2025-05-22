'use client';

import { FC } from 'react';

import ProductItem from './product-item';
import { BagActionType, Product } from '../api/model';
import { useBagDispatch } from '@/context/bag-context';

interface ProductsProps {
	products: Product[];
}

const Products: FC<ProductsProps> = (props) => {
	const { products } = props;
	const dispatch = useBagDispatch();

	const onAddToCart = (product: Product) => {
		dispatch({ payload: product, type: BagActionType.ADD_TO_BAG });
	};
	return (
		<div className='grid md:grid-cols-2 gap-8'>
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					onAddToCart={onAddToCart}
				/>
			))}
		</div>
	);
};

export default Products;
