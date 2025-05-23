'use client';
import { FunctionComponent } from 'react';
import { useNotification } from '@/context/notification-context';

import NotificationsItem from './notifications-item';
import NotificationsList from './notifications-list';

// TODO: check when design is ready
export const Notifications: FunctionComponent = () => {
	const { notifications } = useNotification();
	return (
		<NotificationsList>
			{notifications.items.map((notification) => (
				<NotificationsItem key={notification.id} notification={notification} />
			))}
		</NotificationsList>
	);
};

export default Notifications;
