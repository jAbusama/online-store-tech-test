import PaymentForm from './payment-form';
import ShippingForm from './shipping-form';

const CheckoutForm = () => {
	return (
		<form className='space-y-5'>
			<ShippingForm />
			<hr className='border-t border-gray-200 mb-5' />
			<PaymentForm />
		</form>
	);
};

export default CheckoutForm;
