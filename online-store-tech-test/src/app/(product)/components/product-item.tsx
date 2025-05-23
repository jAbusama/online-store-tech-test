import Image from 'next/image';

import { Button } from '@/components/uikit/button';

import { Product } from '../api/model';
import { FC } from 'react';
import { roundToCustomHalf } from '@/utils';
import debounce from '@/utils/debounce';
import { Stars } from '@/components/shared/stars';

interface ProductItemProps {
	product: Product;
	onAddToCart: (product: Product) => void;
}

const ProductItem: FC<ProductItemProps> = (props) => {
	const { product, onAddToCart } = props;

	const productRatings = roundToCustomHalf(product.rating.rate);

	const onClickAddToCart = debounce(() => {
		onAddToCart(product);
	}, 300);

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

			<p className='text-sm font-medium text-gray-450'>{product.description}</p>

			<div className='flex justify-between'>
				<span className='text-black text-lg leading-[24px] font-medium'>
					${product.price}
				</span>
				<div className='flex items-center gap-2'>
					<Stars numberOfStars={productRatings} />
					<span className='text-gray-450 text-sm font-medium'>
						({product.rating.count})
					</span>
				</div>
			</div>
			<Button fullwidth onClick={onClickAddToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductItem;
