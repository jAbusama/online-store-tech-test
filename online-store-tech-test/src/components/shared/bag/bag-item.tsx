import { BagItemType } from '@/app/(product)/api/model';
import Input from '@/components/uikit/input';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface CartItem {
	itemInBag: BagItemType;
}

const BagItem: FC<CartItem> = (props) => {
	const { itemInBag } = props;
	return (
		<div className='flex items-center gap-5 py-4'>
			<div className='flex justify-center border border-gray-150 rounded-[10px] py-2 px-4'>
				<div className='relative w-[54] h-[71]'>
					<Image
						src={itemInBag.image}
						alt={itemInBag.title}
						fill
						quality={85} // 75-85 is optimal for quality/size
						priority={true} // Only for above-the-fold images
						placeholder='blur' // Optional blur-up placeholder
						blurDataURL='data:image/jpeg;base64...' // Small base64 for blur
					/>
				</div>
			</div>
			<div>
				<div className='flex justify-between gap-6'>
					<p className='text-sm text-gray-450'>{itemInBag.description}</p>
					<Trash2 size={24} color='#707784' />
				</div>
				<div className='flex items-center justify-between gap-2'>
					<span className='text-black text-sm leading-[16px] font-medium'>
						${itemInBag.price}
					</span>
					<Input value={itemInBag.quantity.toString()} wrapperClass='w-16' />
				</div>
			</div>
		</div>
	);
};

export default BagItem;
