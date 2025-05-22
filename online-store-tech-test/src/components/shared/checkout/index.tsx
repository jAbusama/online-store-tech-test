import { FC, useState } from 'react';

import { Button } from '@/components/uikit/button';
import PaymentDetails from './payment-details';
import OrderConfirmation from '../order/order-confirmation';
import BagProductList from '../bag/bag-product-list';
import OrderSummary from '../order/order-summary';

interface CheckoutProps {
	dismissModal: () => void;
}

const Checkout: FC<CheckoutProps> = (props) => {
	const { dismissModal } = props;
	const [step, setStep] = useState(0);

	const { buttonLabel, heading } = (() => {
		switch (step) {
			case 1:
				return { heading: 'Checkout', buttonLabel: 'Confirm Order' };
			case 2:
				return { heading: 'Order Confirmation', buttonLabel: 'Close' };
			default:
				return { heading: 'Cart', buttonLabel: 'Checkout' };
		}
	})();

	const onSubmit = () => {
		if (step === 2) {
			dismissModal();
		}
		setStep((prev) => prev + 1);
	};

	return (
		<div className='w-full'>
			<h2 className='mb-4 text-lg font-medium leading-[22px]'>{heading}</h2>
			<hr className='border-t border-gray-200 mb-5' />

			<div className='max-h-120 overflow-y-scroll '>
				{step === 0 && <BagProductList />}
				{step === 1 && (
					<>
						<PaymentDetails />
						<hr className='border-t border-gray-200 my-5' />
						<BagProductList />
					</>
				)}
				{step === 2 && <OrderConfirmation />}
			</div>
			<hr className='border-t border-gray-200 mb-5 mt-2' />
			{step === 1 && <OrderSummary />}
			<Button variant='secondary' fullwidth onClick={onSubmit}>
				{buttonLabel}
			</Button>
		</div>
	);
};

export default Checkout;
