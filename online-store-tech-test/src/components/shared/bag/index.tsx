'use client';

import { useBagSummary } from '@/hooks/use-bag-summary';
import Image from 'next/image';
import { FC } from 'react';

interface BagProps {
	onOpenCloseBag: () => void;
}

const Bag: FC<BagProps> = (props) => {
	const { onOpenCloseBag } = props;

	const { totalItemInBag } = useBagSummary();
	return (
		<div className='flex gap-1 items-center' onClick={onOpenCloseBag}>
			<Image
				src='/icons/bag.svg'
				alt='Tech Store Logo'
				width={19}
				height={25}
			/>
			{totalItemInBag !== 0 && (
				<span className='text-sm font-medium text-gray-400'>
					x{totalItemInBag}
				</span>
			)}
		</div>
	);
};

export default Bag;
