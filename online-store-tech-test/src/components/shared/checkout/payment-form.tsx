import Input from '@/components/uikit/input';

const PaymentForm = () => {
	return (
		<div className='space-y-5'>
			<p className='font-medium text-black'>Payment</p>

			<Input label='Card Number' />
			<Input label='Name' />
			<div className='flex justify-between gap-5'>
				<Input label='Expiry (MM/YY)' wrapperClass='flex-grow' />
				<Input label='CVC' wrapperClass='w-20' />
			</div>
		</div>
	);
};

export default PaymentForm;
