import Input from '@/components/uikit/input';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

const CartProductItem = () => {
	return (
		<div className='flex items-center gap-5 py-4'>
			<div className='flex justify-center border border-gray-150 rounded-[10px] py-2 px-4'>
				<div className='relative w-[54] h-[71]'>
					<Image
						src='/images/sample-product-sm.png'
						alt='sample product'
						fill
						// width={54} // Required - max display width
						// height={71} // Required - max display height
						quality={85} // 75-85 is optimal for quality/size
						priority={true} // Only for above-the-fold images
						placeholder='blur' // Optional blur-up placeholder
						blurDataURL='data:image/jpeg;base64...' // Small base64 for blur
					/>
				</div>
			</div>
			<div>
				<div className='flex justify-between gap-6'>
					<p className='text-sm text-gray-450'>
						BIYLACLESEN Women&apos;s 3-in-1 Snowboard
					</p>
					<Trash2 size={24} color='#707784' />
				</div>
				<div className='flex items-center justify-between gap-2'>
					<span className='text-black text-sm leading-[16px] font-medium'>
						$100.00
					</span>
					<Input value={'1'} wrapperClass='w-16' />
				</div>
			</div>
		</div>
	);
};

export default CartProductItem;
