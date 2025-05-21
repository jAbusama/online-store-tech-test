// import CartProducts from '@/app/(product)/components/cart-products';
import CheckoutForm from './checkout-form';

const PaymentDetails = () => {
	return (
		<div>
			<h2 className='mb-4 text-lg font-medium leading-[22px]'>Checkout</h2>

			<hr className='border-t border-gray-200 mb-4' />
			<div className='max-h-120 overflow-y-scroll divide-y divide-gray-200'>
				<CheckoutForm />
				<hr className='border-t border-gray-200 my-5' />
				{/* <CartProducts /> */}
			</div>
		</div>
	);
};

export default PaymentDetails;
