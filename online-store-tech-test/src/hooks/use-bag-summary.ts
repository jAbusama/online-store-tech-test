import { useBag } from '@/context/bag-context';

export const useBagSummary = () => {
	const bag = useBag();
	const { items } = bag;

	const totalItemsAmount = items.reduce(
		(a, b) => (a += b.price * (b.quantity ?? 1)),
		0
	);
	return {
		totalItemsAmount: totalItemsAmount ?? 0,
		totalItemInBag: items.length,
	};
};
