import { BagItemType } from '@/app/(product)/api/model';
import CartProductItem from './bag-item';
import { FC } from 'react';

interface CartProductsType {
	itemsInBag: BagItemType[];
}
const BagItems: FC<CartProductsType> = (props) => {
	const { itemsInBag } = props;
	return (
		<div className='divide-y divide-gray-200'>
			{itemsInBag.length === 0 && <p>No Data</p>}
			{itemsInBag.length !== 0 &&
				itemsInBag.map((item) => (
					<CartProductItem
						key={`product-in-cart-${item.id}`}
						itemInBag={item}
					/>
				))}
		</div>
	);
};

export default BagItems;
