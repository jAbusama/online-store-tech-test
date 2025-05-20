import { Button } from '@/components/uikit/button';
import CheckoutForm from './checkout-form';
import CartProducts from '@/app/(product)/components/cart-products';

const Checkout = () => {
	return (
		<div className=''>
			<h2 className='mb-4 text-lg font-medium leading-[22px]'>Checkout</h2>

			<hr className='border-t border-gray-200 mb-4' />
			<div className='max-h-120 overflow-y-scroll divide-y divide-gray-200'>
				<CheckoutForm />
				<hr className='border-t border-gray-200 my-5' />
				<CartProducts />
			</div>

			<hr className='border-t border-gray-200 my-5' />

			<Button variant='secondary' fullwidth>
				Confirm Order
			</Button>
		</div>
	);
};

export default Checkout;
