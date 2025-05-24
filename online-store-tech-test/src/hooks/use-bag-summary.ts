import { useBag } from '@/context/bag-context';
import { useMemo } from 'react';

export const useBagSummary = () => {
	const { items } = useBag();

	// Memoize calculations to avoid recomputing on every render
	const summary = useMemo(() => {
		const totalItemsAmount = items.reduce((total, item) => {
			return total + item.price * (item.quantity ?? 1);
		}, 0);

		return {
			totalItemsAmount: Number(totalItemsAmount.toFixed(2)),
			totalItemsInBag: items.length,
		};
	}, [items]);

	return summary;
};
