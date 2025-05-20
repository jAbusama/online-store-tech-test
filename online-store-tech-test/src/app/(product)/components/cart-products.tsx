import CartProductItem from './cart-product-item';

const CartProducts = () => {
	return (
		<div className='divide-y divide-gray-200'>
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
		</div>
	);
};

export default CartProducts;
