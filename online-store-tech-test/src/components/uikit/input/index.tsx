import { mergedCx } from '@/helpers/cx-merge';
import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	error?: string;
	iconLeft?: boolean;
	iconRight?: boolean;
	type?: 'text' | 'password';
	placeholder?: string;
	helpText?: string;
	wrapperClass?: string;
};
const Input: FC<InputProps> = (props) => {
	const {
		label,
		name,
		value,
		disabled,
		error,
		type = 'text',
		placeholder,
		helpText,
		wrapperClass,
		...rest
	} = props;

	const clx = mergedCx(
		'col-start-1 row-start-1 block w-full rounded-[10px] bg-white py-1.5 px-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 disabled:bg-gray-300/20 disabled:cursor-not-allowed',
		{
			'outline-red-500 focus:outline-red-500': Boolean(error),
		}
	);

	return (
		<div className={mergedCx(wrapperClass)}>
			{label && (
				<label htmlFor={name} className='block text-sm text-gray-750 mb-2'>
					{label}
				</label>
			)}

			<div className='grid grid-cols-1'>
				<input
					{...rest}
					id={name}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					className={clx}
					disabled={disabled}
				/>
			</div>
			{helpText && !error && (
				<p className='text-gray-500 text-xs mt-1 px-1'>{helpText}</p>
			)}
			{error && (
				<div
					id={`${name}-input-error`}
					className='flex items-center gap-1 mt-1 text-xs text-red-600'
				>
					<p>{error}</p>
				</div>
			)}
		</div>
	);
};

export default Input;
