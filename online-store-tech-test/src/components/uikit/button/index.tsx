import type { ReactNode } from 'react';
import { mergedCx } from '@/helpers/cx-merge';

type ButtonProps = {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
	size?: keyof typeof btnSizes;
	centered?: boolean;
	disabled?: boolean;
	loading?: boolean;
	fullwidth?: boolean;
	type?: 'circle' | 'rectangle';
	variant?: keyof typeof btnVariants;
};

const btnSizes = {
	sm: 'p-2 text-xs',
	md: 'p-2.5 text-sm leading-[18px]',
	lg: 'px-2.5 py-2 text-md',
} as const;

const btnVariants = {
	primary:
		'bg-primary-100 text-white hover:bg-primary-100/90 focus-visible:outline-primary',
	secondary:
		'bg-secondary-100 text-white hover:bg-secondary-100/90 focus-visible:outline-secondary-100',
	tertiary:
		'bg-tertiary-100 text-white hover:bg-tertiary-100/90 focus-visible:outline-tertiary-100',
} as const;

export function Button(props: ButtonProps) {
	const {
		children,
		className,
		onClick,
		size = 'md',
		centered = false,
		disabled,
		loading,
		fullwidth,
		type = 'rectangle',
		variant = 'primary',
	} = props;

	const cxClassName = mergedCx(
		'flex items-center justify-center gap-x-1.5 font-bold shadow-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
		btnSizes[size],
		btnVariants[variant],
		{
			'cursor-not-allowed bg-rose-400': disabled ?? loading,
			'w-full': fullwidth,
			'm-auto': centered,
			'rounded-[10px]': type === 'rectangle',
			'rounded-full': type === 'circle',
			' w-6 h-6': type === 'circle' && size === 'sm',
			' w-8 h-8': type === 'circle' && size === 'md',
			' w-12 h-12': type === 'circle' && size === 'lg',
		},
		className
	);
	return (
		<button
			type='button'
			className={cxClassName}
			onClick={onClick}
			disabled={disabled ?? loading}
		>
			{children}
		</button>
	);
}
