'use client';

import { FC } from 'react';

import ProductItem from './product-item';
import { BagActionType, Product } from '../api/model';
import { useBagDispatch } from '@/context/bag-context';
import { useNotification } from '@/context/notification-context';
import { NotificationActionType } from '@/components/uikit/notification';

interface ProductsProps {
	products: Product[];
}

const Products: FC<ProductsProps> = (props) => {
	const { products } = props;
	const dispatch = useBagDispatch();
	const { dispatch: notificationDispatch } = useNotification();

	const onAddToCart = (product: Product) => {
		dispatch({ payload: product, type: BagActionType.ADD_TO_BAG });
		notificationDispatch({
			type: NotificationActionType.SHOW_NOTIFICATION,
			payload: {
				title: 'Success',
				supportingText: 'Added to bag',
				type: 'success',
				autoHideDuration: 3500,
			},
		});
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
