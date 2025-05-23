import { FC, useState } from 'react';

import { Button } from '@/components/uikit/button';
import OrderConfirmation from '../order/order-confirmation';
import BagProductList from '../bag/bag-product-list';
import OrderSummary from '../order/order-summary';
import { FormProvider, useForm } from 'react-hook-form';
import CheckoutForm from './checkout-form';
import { CheckoutFormValues } from '@/types/checkout-form';

interface CheckoutProps {
	dismissModal: () => void;
}

const Checkout: FC<CheckoutProps> = (props) => {
	const { dismissModal } = props;
	const methods = useForm<CheckoutFormValues>({ mode: 'onChange' });
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

	const onSubmitPayment = (data: CheckoutFormValues) => {
		setStep((prev) => prev + 1);
		console.log('paymentDetails', data);
	};

	const onSubmit = () => {
		if (step === 2) {
			dismissModal();
		}
		if (step === 1) {
			methods.handleSubmit(onSubmitPayment)();
		}
		if (step !== 1) {
			setStep((prev) => prev + 1);
		}
	};

	return (
		<FormProvider {...methods}>
			<div className='w-full'>
				<h2 className='mb-4 text-lg font-medium leading-[22px]'>{heading}</h2>
				<hr className='border-t border-gray-200 mb-5' />

				<div className='max-h-120 overflow-y-scroll '>
					{step === 0 && <BagProductList />}
					{step === 1 && (
						<>
							<CheckoutForm />
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
		</FormProvider>
	);
};

export default Checkout;
