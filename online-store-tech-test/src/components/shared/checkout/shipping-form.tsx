import Input from '@/components/uikit/input';

const ShippingForm = () => {
	return (
		<div className='space-y-5'>
			<p className='font-medium text-black'>Shipping Information</p>

			<Input label='Email' />
			<Input label='Name' />
			<Input label='Address' />
		</div>
	);
};

export default ShippingForm;
