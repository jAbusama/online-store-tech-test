export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export enum BagActionType {
	UPDATE_IS_LOADING = 'UPDATE_IS_LOADING',
	ADD_TO_CART = 'ADD_TO_CART',
	DELETE_TO_CART = 'DELETE_TO_CART',
}

// update loading state
export interface BagUpdateLoading {
	type: BagActionType.UPDATE_IS_LOADING;
	payload: boolean;
}

// add product to cart state
export interface BagAddProduct {
	type: BagActionType.ADD_TO_CART;
	payload: Product;
}

// delete product from cart state
export interface BagDeleteProduct {
	type: BagActionType.DELETE_TO_CART;
	payload: number;
}

export type BagActions = BagUpdateLoading | BagAddProduct | BagDeleteProduct;

export type BagItemType = Product & { quantity: number };

// cart states
export type BagState = {
	items: BagItemType[];
	isLoading: boolean;
};
