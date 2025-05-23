import { FunctionComponent } from 'react';

import { notificationIcons } from './icons';
import { NotificationArgs, NotificationTypes } from './models';
import { mergedCx } from '@/helpers/cx-merge';
import { CircleX } from 'lucide-react';
import Image from 'next/image';

const variantClass: Record<NotificationTypes, string> = {
	success: 'bg-white text-gray-800',
	error: 'bg-[#F15E60] text-white',
	primary: 'bg-[#3B63AF] text-black',
	warning: 'bg-[#F9D76F] text-white',
	gray: 'bg-[#3B63AF] text-black',
	info: 'bg-[#3B63AF] text-black',
};

export const Notification: FunctionComponent<NotificationArgs> = (props) => {
	const {
		title,
		supportingText,
		className,
		onClose,
		type,
		showCloseIcon = true,
	} = props;

	const cxClassName = mergedCx(
		'relative overflow-hidden pointer-events-auto flex w-max max-w-[340px] md:max-w-[500px] items-start rounded-xl p-2 shadow-md z-10',
		variantClass[type],
		className
	);

	return (
		<div className={cxClassName}>
			<div className='absolute w-40 h-40 -left-10 -top-10'>
				<Image
					src='/images/backdrop-pattern.png'
					alt='backdrop-pattern'
					fill={true}
				/>
			</div>
			<div className='flex items-start gap-4'>
				<div className='shrink-0'>{notificationIcons[type]}</div>
				<div className='text-gray-750'>
					<p className='text-sm font-medium'>{title}</p>
					<p className='text-xs'>{supportingText}</p>
				</div>
			</div>

			{showCloseIcon && (
				<div className='ml-auto pl-4'>
					<button
						type='button'
						aria-label='Close'
						onClick={onClose}
						className='cursor-pointer transition-colors'
					>
						<CircleX size='20' className='text-gray-500' />
					</button>
				</div>
			)}
		</div>
	);
};
