import { FC, useState } from 'react';

import { Button } from '@/components/uikit/button';
import PaymentDetails from './payment-details';
import OrderConfirmation from '../order/order-confirmation';
import BagProductList from '../bag/bag-product-list';

interface CheckoutProps {
	dismissModal: () => void;
}

const Checkout: FC<CheckoutProps> = (props) => {
	const { dismissModal } = props;
	const [step, setStep] = useState(0);

	const buttonLabel = () => {
		switch (step) {
			case 1:
				return 'Confirm Order';
			case 2:
				return 'Close';
			default:
				return 'Checkout';
		}
	};

	const onSubmit = () => {
		if (step === 2) {
			dismissModal();
		}
		setStep((prev) => prev + 1);
	};

	return (
		<div className='w-full'>
			{step === 0 && <BagProductList />}
			{step === 1 && <PaymentDetails />}
			{step === 2 && <OrderConfirmation />}

			<hr className='border-t border-gray-200 mb-5' />

			<Button variant='secondary' fullwidth onClick={onSubmit}>
				{buttonLabel()}
			</Button>
		</div>
	);
};

export default Checkout;
