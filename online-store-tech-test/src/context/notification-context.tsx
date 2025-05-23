'use client';

import { createContext, Dispatch, useContext, useReducer } from 'react';

import {
	DismissNotificationAction,
	NotificationActions,
	NotificationActionType,
	NotificationState,
	ShowNotificationAction,
} from '@/components/uikit/notification';
import { nanoid } from 'nanoid';

type NotificationContextType = {
	notifications: NotificationState;
	dispatch: Dispatch<NotificationActions>;
};

const NotificationContext = createContext({} as NotificationContextType);

const notificationReducer = <
	Type extends NotificationActionType,
	Options extends Extract<NotificationActions, { type: Type }>['payload']
>(
	state: NotificationState,
	action: { type: Type; payload: Options }
) => {
	switch (action.type) {
		case NotificationActionType.SHOW_NOTIFICATION: {
			const typeAction = action as ShowNotificationAction;
			const newNotification = {
				id: nanoid(),
				...typeAction.payload,
			};

			return { ...state, items: [...state.items, newNotification] };
		}
		case NotificationActionType.DISMISS_NOTIFICATION: {
			const typeAction = action as DismissNotificationAction;

			const filteredNotificaitons = state.items.filter(
				(nof) => nof.id !== typeAction.payload.id
			);

			return { ...state, items: filteredNotificaitons };
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
};

const initialValue: NotificationState = {
	items: [],
};

export function NotificationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [notifications, dispatch] = useReducer(
		notificationReducer,
		initialValue
	);

	return (
		<NotificationContext.Provider value={{ notifications, dispatch }}>
			{children}
		</NotificationContext.Provider>
	);
}

export function useNotification() {
	return useContext(NotificationContext);
}
