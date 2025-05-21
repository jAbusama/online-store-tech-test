'use client';
import BagItems from '@/components/shared/bag/bag-items';
import { useBag } from '@/context/cart-context';

const BagProductList = () => {
	const currentBag = useBag();

	return (
		<div className=''>
			<h2 className='mb-4 text-lg font-medium leading-[22px]'>Cart</h2>

			<hr className='border-t border-gray-200 mb-4' />
			<div className='max-h-120 overflow-y-scroll'>
				<BagItems itemsInBag={currentBag.items} />
			</div>
		</div>
	);
};

export default BagProductList;
