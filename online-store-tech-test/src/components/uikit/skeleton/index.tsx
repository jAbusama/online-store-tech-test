import { type FunctionComponent } from 'react';

import { mergedCx } from '@/helpers/cx-merge';

const roundSizeClass = {
	sm: 'rounded-sm',
	rounded: 'rounded',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	'2xl': 'rounded-2xl',
	'3xl': 'rounded-3xl',
	full: 'rounded-full',
} as const;

interface SkeletonProps {
	className?: string;
	rounded?: keyof typeof roundSizeClass;
}

export const Skeleton: FunctionComponent<SkeletonProps> = (props) => {
	const { rounded = 'md', className } = props;

	const cxClassName = mergedCx(
		'animate-pulse bg-gray-200',
		roundSizeClass[rounded],
		className
	);

	return <div className={cxClassName} />;
};
