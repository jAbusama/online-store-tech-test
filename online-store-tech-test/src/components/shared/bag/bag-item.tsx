import { ChangeEvent, FC, useState } from 'react';
import Image from 'next/image';

import { BagItemType, UpdateQuantityPayload } from '@/app/(product)/api/model';
import Input from '@/components/uikit/input';
import { Trash2 } from 'lucide-react';

interface CartItem {
	itemInBag: BagItemType;
	deleteItem: (id: number) => void;
	onChangeItemQuantity: (val: UpdateQuantityPayload) => void;
}

const BagItem: FC<CartItem> = (props) => {
	const { itemInBag, deleteItem, onChangeItemQuantity } = props;
	const [itemQuantity, setItemQuantity] = useState(
		itemInBag.quantity.toString() || '1'
	);

	const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setItemQuantity(value);
		if (/^\d*$/.test(value) && value !== '' && value !== '0') {
			onChangeItemQuantity({ itemID: itemInBag.id, quantity: Number(value) });
		}
	};

	const onBlurHandler = () => {
		if (itemQuantity === '' || itemQuantity === '0') {
			setItemQuantity('1');
		}
	};

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
				<div className='flex justify-between gap-4'>
					<p className='text-sm text-gray-450'>{itemInBag.description}</p>
					<Trash2
						className='flex-none'
						size={20}
						color='#707784'
						onClick={() => deleteItem(itemInBag.id)}
					/>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<span className='text-black text-sm leading-[16px] font-medium'>
						${itemInBag.price}
					</span>
					<Input
						wrapperClass='w-16'
						value={itemQuantity}
						onChange={onChangeQuantity}
						onBlur={onBlurHandler}
						placeholder='Item'
					/>
				</div>
			</div>
		</div>
	);
};

export default BagItem;
