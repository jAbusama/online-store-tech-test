import Input from '@/components/uikit/input';
import { useFormContext } from 'react-hook-form';
interface ShippingFormValues {
	email: string;
	name: string;
	address: string;
}
const ShippingForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ShippingFormValues>();

	return (
		<div className='space-y-5'>
			<p className='font-medium text-black'>Shipping Information</p>

			<Input
				label='Email'
				{...register('email', { required: 'Email is required.' })}
				error={errors.email?.message}
			/>
			<Input
				label='Name'
				{...register('name', { required: 'Name is required.' })}
				error={errors.name?.message}
			/>
			<Input
				label='Address'
				{...register('address', { required: 'address is required.' })}
				error={errors.address?.message}
			/>
		</div>
	);
};

export default ShippingForm;
