'use client';
import dynamic from 'next/dynamic';
import { FunctionComponent } from 'react';
import { useNotification } from '@/context/notification-context';
// import NotificationsItem from './notifications-item';
import NotificationsList from './notifications-list';
import { Skeleton } from '@/components/uikit/skeleton';

const NotificationsItem = dynamic(
	async () => await import('./notifications-item'),
	{ loading: () => <Skeleton className='w-40 h-14' /> }
);

export const Notifications: FunctionComponent = () => {
	const { notifications } = useNotification();
	return (
		<NotificationsList>
			{notifications.items.length !== 0 &&
				notifications.items.map((notification) => (
					<NotificationsItem
						key={notification.id}
						notification={notification}
					/>
				))}
		</NotificationsList>
	);
};

export default Notifications;
