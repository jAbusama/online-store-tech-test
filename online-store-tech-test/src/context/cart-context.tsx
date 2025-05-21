'use client';
import {
	BagActions,
	BagActionType,
	BagAddProduct,
	BagDeleteProduct,
	BagState,
	BagUpdateLoading,
} from '@/app/(product)/api/model';
import { createContext, Dispatch, useContext, useReducer } from 'react';

const BagContext = createContext({} as BagState);

export const BagDispatchContext = createContext({} as Dispatch<BagActions>);

export const cartReducer = <
	Type extends BagActionType,
	Options extends Extract<BagActions, { type: Type }>['payload']
>(
	state: BagState,
	action: { type: Type; payload: Options }
) => {
	switch (action.type) {
		case BagActionType.UPDATE_IS_LOADING: {
			const typeAction = action as BagUpdateLoading;
			return { ...state, isLoading: typeAction.payload };
		}

		case BagActionType.ADD_TO_CART: {
			const typeAction = action as BagAddProduct;

			const newProductInBag = typeAction.payload;
			const itemsInCart = [...state.items];

			const existingItemIdx = itemsInCart.findIndex(
				(item) => item.id === newProductInBag.id
			);

			if (existingItemIdx !== -1) {
				itemsInCart[existingItemIdx].quantity += 1;
			} else {
				itemsInCart.push({ ...newProductInBag, quantity: 1 });
			}

			return { ...state, items: itemsInCart };
		}

		case BagActionType.ADD_TO_CART: {
			const typeAction = action as BagDeleteProduct;

			const id = typeAction.payload;
			const filteredItemsInBag = state.items.filter((item) => item.id !== id);
			return { ...state, items: filteredItemsInBag };
		}

		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
};

const initialValue: BagState = {
	items: [],
	isLoading: false,
};

export function BagProvider({ children }: { children: React.ReactNode }) {
	const [cart, dispatch] = useReducer(cartReducer, initialValue);

	return (
		<BagContext.Provider value={cart}>
			<BagDispatchContext.Provider value={dispatch}>
				{children}
			</BagDispatchContext.Provider>
		</BagContext.Provider>
	);
}

export function useBag() {
	return useContext(BagContext);
}

export function useBagDispatch() {
	return useContext(BagDispatchContext);
}
