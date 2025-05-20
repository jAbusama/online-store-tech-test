import { FC } from 'react';

import ProductItem from './product-item';
import { Product } from '../api/model';

interface ProductsProps {
	products: Product[];
}

const Products: FC<ProductsProps> = (props) => {
	const { products } = props;
	return (
		<div className='grid md:grid-cols-2 gap-8'>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
