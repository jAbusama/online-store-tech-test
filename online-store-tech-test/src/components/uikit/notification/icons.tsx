import { ReactNode } from 'react';

import { NotificationArgs } from './models';
import { CircleAlert, CircleCheck, Info } from 'lucide-react';

export const notificationIcons: Partial<
	Record<NonNullable<NotificationArgs['type']>, ReactNode>
> = {
	success: (
		<div className='flex items-center justify-center bg-green-100 w-12 h-12 rounded-full border-8 border-green-50'>
			<CircleCheck className='text-[#2EA58D]' size='20' />
		</div>
	),
	error: (
		<div className='flex items-center justify-center bg-red-100 w-12 h-12 rounded-full border-8 border-red-50'>
			<CircleAlert className='text-[#F15E60]' size='20' />
		</div>
	),
	warning: (
		<div className='flex items-center justify-center bg-yellow-100 w-12 h-12 rounded-full border-8 border-yellow-50'>
			<CircleAlert className='text-[#F9D76F]' size='20' />
		</div>
	),
	primary: (
		<div className='flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full border-8 border-blue-50'>
			<Info className='text-[#3B63AF]' size='20' />
		</div>
	),
};
