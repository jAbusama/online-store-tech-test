import { Product } from './model';

export async function getProducts(): Promise<Product[]> {
	const apiUrl = `${process.env.NEXT_PUBLIC_API}/products`;

	try {
		console.log(apiUrl);
		const res = await fetch(apiUrl, {
			// 86400
			next: { revalidate: 86400 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch product page data');
		}

		// Check if response has content
		const contentLength = res.headers.get('content-length');
		if (contentLength === '0') {
			throw new Error('Empty response received');
		}

		const data: Product[] = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching products data:', error);
		throw new Error('400');
	}
}
