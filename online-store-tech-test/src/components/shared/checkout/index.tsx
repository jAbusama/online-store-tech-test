'use client';

import { FC, useCallback, useState } from 'react';

import { Button, ButtonVariants } from '@/components/uikit/button';
import OrderConfirmation from '../order/order-confirmation';
import BagProductList from '../bag/bag-product-list';
import OrderSummary from '../order/order-summary';
import { FormProvider, useForm } from 'react-hook-form';
import CheckoutForm from './checkout-form';
import { CheckoutFormValues } from '@/types/checkout-form';
import { useBagSummary } from '@/hooks/use-bag-summary';

interface CheckoutProps {
	dismissModal: () => void;
}

const Checkout: FC<CheckoutProps> = (props) => {
	const { dismissModal } = props;
	const methods = useForm<CheckoutFormValues>({ mode: 'onChange' });
	const { totalItemsInBag } = useBagSummary();
	const [step, setStep] = useState(0);

	const { btnLabel, heading, btnVariant } = (() => {
		switch (step) {
			case 1:
				return {
					heading: 'Checkout',
					btnLabel: 'Confirm Order',
					btnVariant: 'tertiary',
				};
			case 2:
				return {
					heading: 'Order Confirmation',
					btnLabel: 'Close',
					btnVariant: 'tertiary',
				};
			default:
				return {
					heading: 'Cart',
					btnLabel: 'Checkout',
					btnVariant: 'secondary',
				};
		}
	})();

	const onSubmitPayment = (data: CheckoutFormValues) => {
		setStep((prev) => prev + 1);
		console.log('paymentDetails', data);
	};

	const onSubmit = () => {
		if (step === 2) {
			dismissModal();
			return;
		}

		if (step === 1) {
			methods.handleSubmit(onSubmitPayment)();
			return;
		}

		setStep((prev) => prev + 1);
	};

	const renderStepContent = useCallback(() => {
		switch (step) {
			case 0:
				return <BagProductList />;
			case 1:
				return (
					<>
						<CheckoutForm />
						<hr className='border-t border-gray-200 my-5' />
						<BagProductList />
					</>
				);
			case 2:
				return <OrderConfirmation />;
			default:
				return null;
		}
	}, [step]);

	return (
		<FormProvider {...methods}>
			<div className='w-full'>
				<h2 className='mb-4 text-lg font-medium leading-[22px]'>{heading}</h2>
				<hr className='border-t border-gray-200 mb-5' />

				<div className='max-h-120 overflow-y-scroll '>
					{renderStepContent()}
				</div>
				<hr className='border-t border-gray-200 mb-5 mt-2' />
				{step === 1 && <OrderSummary />}
				<Button
					variant={btnVariant as ButtonVariants}
					fullwidth
					onClick={onSubmit}
					disabled={totalItemsInBag <= 0}
				>
					{btnLabel}
				</Button>
			</div>
		</FormProvider>
	);
};

export default Checkout;
