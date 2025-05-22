'use client';
import { FunctionComponent } from 'react';

import {
	BagActionType,
	UpdateQuantityPayload,
} from '@/app/(product)/api/model';
import BagItems from '@/components/shared/bag/bag-items';
import { useBag, useBagDispatch } from '@/context/bag-context';
import debounce from '@/utils/debounce';

const BagProductList: FunctionComponent = () => {
	const currentBag = useBag();
	const dispatch = useBagDispatch();

	const onDeleteItem = (id: number) => {
		dispatch({ type: BagActionType.REMOVE_FROM_BAG, payload: id });
	};

	const onChangeItemQuantity = debounce((payload: UpdateQuantityPayload) => {
		dispatch({ type: BagActionType.UPDATE_ITEM_QUANTITY, payload });
	}, 300);

	return (
		<>
			<BagItems
				itemsInBag={currentBag.items}
				deleteItem={onDeleteItem}
				changeItemQuantity={onChangeItemQuantity}
			/>
		</>
	);
};

export default BagProductList;
