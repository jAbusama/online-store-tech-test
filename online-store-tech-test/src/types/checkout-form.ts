export type PaymentDetailValues = {
	cardNumber: string;
	name: string;
	expiry: string;
	cvc: string;
};

export type ShippingFormValues = {
	email: string;
	name: string;
	address: string;
};

export type CheckoutFormValues = PaymentDetailValues & ShippingFormValues;
