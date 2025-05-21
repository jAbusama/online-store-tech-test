'use client';

import { useBag } from '@/context/cart-context';
import Image from 'next/image';
import { FC } from 'react';

interface BagProps {
	onOpenCloseBag: () => void;
}

const Bag: FC<BagProps> = (props) => {
	const { onOpenCloseBag } = props;

	const itemsInBag = useBag();

	const totalNumberOfProductInCart = itemsInBag.items.length;
	return (
		<div className='flex gap-1 items-center' onClick={onOpenCloseBag}>
			<Image
				src='/icons/bag.svg'
				alt='Tech Store Logo'
				width={19}
				height={25}
			/>
			{totalNumberOfProductInCart !== 0 && (
				<span className='text-sm font-medium text-gray-400'>
					x{totalNumberOfProductInCart}
				</span>
			)}
		</div>
	);
};

export default Bag;
