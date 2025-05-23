export type NotificationTypes =
	| 'success'
	| 'error'
	| 'warning'
	| 'gray'
	| 'primary'
	| 'info';

export type NotificationPositionsType =
	| 'top'
	| 'top-right'
	| 'top-left'
	| 'bottom'
	| 'bottom-right'
	| 'bottom-left';

export interface NotificationArgs {
	title: string;
	/**
	 * The message of the notification
	 */
	supportingText: string;

	/**
	 * The type of notification to show.
	 */
	type: NotificationTypes;

	/**
	 * Optional callback function to run side effects after the notification has closed.
	 */
	onClose?: () => void;
	className?: string;
	/**
	 * Show or hide close icon
	 */
	showCloseIcon?: boolean;
	/**
	 * The position of notification
	 */
	position?: NotificationPositionsType;
}

export interface INotification extends NotificationArgs {
	/**
	 * The notification id.
	 */
	id: string;

	/**
	 * An optional dismiss duration time
	 *
	 * @default 6000
	 */
	autoHideDuration?: number;
}

export enum NotificationActionType {
	SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
	DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION',
}

export interface ShowNotificationAction {
	type: NotificationActionType.SHOW_NOTIFICATION;
	payload: Omit<INotification, 'id'>;
}

// add product to cart state
export interface DismissNotificationAction {
	type: NotificationActionType.DISMISS_NOTIFICATION;
	payload: { id: string };
}

export type NotificationActions =
	| ShowNotificationAction
	| DismissNotificationAction;

export type NotificationState = {
	items: INotification[];
};
