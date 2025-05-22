import Input from '@/components/uikit/input';
import { useFormContext } from 'react-hook-form';

interface PaymentDetailValues {
	cardNumber: string;
	name: string;
	expiry: string;
	cvc: string;
}

const PaymentForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<PaymentDetailValues>();
	return (
		<div className='space-y-5'>
			<p className='font-medium text-black'>Payment</p>

			<Input
				label='Card Number'
				{...register('cardNumber', { required: 'Card Number is required.' })}
				error={errors.cardNumber?.message}
			/>
			<Input
				label='Name'
				{...register('name', { required: 'Name is required.' })}
				error={errors.name?.message}
			/>
			<div className='flex justify-between gap-5'>
				<Input
					label='Expiry (MM/YY)'
					wrapperClass='flex-grow'
					{...register('expiry', { required: 'Email is required.' })}
					error={errors.expiry?.message}
				/>
				<Input
					label='CVC'
					wrapperClass='w-20'
					{...register('cvc', {
						required: 'CVC is required.',
						validate: (val: string) => {
							if (!/^\d*$/.test(val)) {
								return 'Number only';
							}
						},
					})}
					error={errors.cvc?.message}
				/>
			</div>
		</div>
	);
};

export default PaymentForm;
