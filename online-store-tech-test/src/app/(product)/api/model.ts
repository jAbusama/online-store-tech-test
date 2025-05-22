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
	ADD_TO_BAG = 'ADD_TO_BAG',
	REMOVE_FROM_BAG = 'REMOVE_FROM_BAG',
	UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
}

export type UpdateQuantityPayload = { itemID: number; quantity: number };

// update loading state
export interface BagUpdateLoading {
	type: BagActionType.UPDATE_IS_LOADING;
	payload: boolean;
}

// add product to cart state
export interface AddToBag {
	type: BagActionType.ADD_TO_BAG;
	payload: Product;
}

// delete product from cart state
export interface RemoveFromBag {
	type: BagActionType.REMOVE_FROM_BAG;
	payload: number;
}

// update item quantity from bag
export interface UpdateItemQuantity {
	type: BagActionType.UPDATE_ITEM_QUANTITY;
	payload: UpdateQuantityPayload;
}

export type BagActions =
	| BagUpdateLoading
	| AddToBag
	| RemoveFromBag
	| UpdateItemQuantity;

export type BagItemType = Product & { quantity: number };

// cart states
export type BagState = {
	items: BagItemType[];
	isLoading: boolean;
};
