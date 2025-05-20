import { getProducts } from './api';
import Products from './components/products';

export default async function Home() {
	const products = await getProducts();

	return (
		<div className='md:max-w-8/10 md:mx-auto p-5'>
			<div className='mb-5'>
				<h1 className='text-xl font-bold text-black'>Fake Products</h1>
			</div>

			<Products products={products} />
		</div>
	);
}
