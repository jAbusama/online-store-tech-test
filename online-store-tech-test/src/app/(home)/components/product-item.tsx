import Image from 'next/image';

import { Stars } from '@/components/shared/Stars';
import { Button } from '@/components/uikit/button';

import { Product } from '../api/model';
import { FC } from 'react';

interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = (props) => {
	const { product } = props;

	return (
		<div className='space-y-5 py-5'>
			<div className='flex justify-center border border-gray-200 rounded-2xl p-2.5'>
				<Image
					src={product.image}
					alt='sample product'
					width={214} // Required - max display width
					height={285} // Required - max display height
					quality={85} // 75-85 is optimal for quality/size
					priority={true} // Only for above-the-fold images
					placeholder='blur' // Optional blur-up placeholder
					blurDataURL='data:image/jpeg;base64...' // Small base64 for blur
				/>
			</div>

			<p className='text-sm font-medium text-gray-600'>{product.description}</p>

			<div className='flex justify-between'>
				<span className='text-black text-lg leading-[24px] font-medium'>
					${product.price}
				</span>
				<div className='flex items-center gap-2'>
					<Stars numberOfStars={Math.floor(product.rating.rate)} />
					<span className='text-gray-600 text-sm font-medium'>
						({product.rating.count})
					</span>
				</div>
			</div>
			<Button fullwidth>Add to cart</Button>
		</div>
	);
};

export default ProductItem;
