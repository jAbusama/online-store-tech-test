import { Skeleton } from '@/components/uikit/skeleton';

export default function Loading() {
	return <ProductSkeleton />;
}

const ProductSkeleton = () => {
	return (
		<div className='flex flex-col gap-6'>
			{new Array(4).fill(0).map((_, idx) => (
				<div
					key={`produc-skeleton-${idx}`}
					className='space-y-5 py-5 bg-gray-100 border border-gray-200 rounded-md p-5 w-full animate-pulse'
				>
					<div className='flex justify-center'>
						<Skeleton rounded='lg' className='w-full h-[285px]' />
					</div>
					<div className='space-y-1'>
						<Skeleton rounded='sm' className='w-9/10 h-4' />
						<Skeleton rounded='sm' className='w-6/10 h-4' />
					</div>

					<div className='flex justify-between'>
						<Skeleton rounded='sm' className='w-20 h-4' />
						<div className='flex gap-1'>
							<Skeleton rounded='sm' className='w-30 h-4' />
							<Skeleton rounded='full' className='w-4 h-4' />
						</div>
					</div>

					<Skeleton rounded='sm' className='w-full h-10' />
				</div>
			))}
		</div>
	);
};
