import { FC } from 'react';

import { BagItemType, UpdateQuantityPayload } from '@/app/(product)/api/model';
import BagItem from './bag-item';

interface CartProductsType {
	itemsInBag: BagItemType[];
	deleteItem: (id: number) => void;
	changeItemQuantity: (val: UpdateQuantityPayload) => void;
}
const BagItems: FC<CartProductsType> = (props) => {
	const { itemsInBag, deleteItem, changeItemQuantity } = props;

	return (
		<div className='divide-y divide-gray-200'>
			{itemsInBag.length === 0 && (
				<p className='text-center text-gray-500 font-lg font-medium'>
					No Items in your Bag
				</p>
			)}
			{itemsInBag.length !== 0 &&
				itemsInBag.map((item) => (
					<BagItem
						key={`product-in-cart-${item.id}`}
						itemInBag={item}
						deleteItem={deleteItem}
						onChangeItemQuantity={changeItemQuantity}
					/>
				))}
		</div>
	);
};

export default BagItems;
