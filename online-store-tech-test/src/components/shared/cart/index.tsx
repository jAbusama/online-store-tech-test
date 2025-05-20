import CartProducts from '@/app/(product)/components/cart-products';
import { Button } from '@/components/uikit/button';

const Cart = () => {
	return (
		<div className=''>
			<h2 className='mb-4 text-lg font-medium leading-[22px]'>Cart</h2>

			<hr className='border-t border-gray-200 mb-4' />
			<div className='max-h-120 overflow-y-scroll'>
				<CartProducts />
			</div>
			<hr className='border-t border-gray-200 mb-5' />

			<Button variant='secondary' fullwidth>
				Checkout
			</Button>
		</div>
	);
};

export default Cart;
