import { useBagSummary } from '@/hooks/use-bag-summary';

const OrderSummary = () => {
	const { totalItemsAmount } = useBagSummary();
	return (
		<div className='flex justify-center gap-2 text-black text-lg font-medium mb-5'>
			<p>Order Summary:</p>
			<p>${totalItemsAmount}</p>
		</div>
	);
};

export default OrderSummary;
