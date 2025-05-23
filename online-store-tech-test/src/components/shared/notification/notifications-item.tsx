'use client';
import { useTimeoutFn, useUpdateEffect } from '@reactuses/core';
import { motion, useIsPresent, type Variants } from 'framer-motion';
import { FunctionComponent } from 'react';

import {
	INotification,
	Notification,
	NotificationActionType,
	NotificationPositionsType,
} from '@/components/uikit/notification';
import { getMotionDirectionAndPosition } from '@/helpers/notification';
import { useNotification } from '@/context/notification-context';

interface NotificationsItemProps {
	notification: INotification;
	className?: string;
}

// TODO: check when design is ready
const NotificationsItem: FunctionComponent<NotificationsItemProps> = (
	props
) => {
	const {
		className,
		notification: {
			id,
			autoHideDuration,
			supportingText,
			title,
			onClose,
			type = 'primary',
			position = 'top-right',
		},
	} = props;

	/**
	 * When a component is the child of AnimatePresence,
	 * it can use usePresence to access information about whether it's still present in the React tree.
	 * @useIsPresent simply returns whether or not the component is present.
	 */
	const isPresent = useIsPresent();

	const { dispatch } = useNotification();

	const motionVariants: Variants = {
		initial: (position: NotificationPositionsType) => {
			return {
				opacity: 0,
				...getMotionDirectionAndPosition(position),
			};
		},
		animate: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: [0.4, 0, 0.2, 1],
			},
		},
		exit: (position) => {
			return {
				opacity: 0,
				...getMotionDirectionAndPosition(position, 30),
				transition: {
					duration: 0.2,
					ease: [0.4, 0, 1, 1],
				},
			};
		},
	};

	// Handle dismiss of a single notification
	const handleDismiss = () => {
		if (isPresent) {
			dispatch({
				type: NotificationActionType.DISMISS_NOTIFICATION,
				payload: { id },
			});
		}
	};

	// Call the dismiss function after a certain timeout
	const [, cancel, reset] = useTimeoutFn(
		handleDismiss,
		autoHideDuration ?? 6000
	);

	// Reset or cancel dismiss timeout based on mouse interactions
	const onMouseEnter = () => cancel();
	const onMouseLeave = () => reset();

	// Call `onDismissComplete` when notification unmounts if present
	useUpdateEffect(() => {
		if (!isPresent) {
			onClose?.();
		}
	}, [isPresent]);

	return (
		<motion.li
			key={`notification-${id}`}
			initial='initial'
			animate='animate'
			exit='exit'
			layout='position'
			variants={motionVariants}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			custom={position}
		>
			<Notification
				type={type}
				title={title}
				supportingText={supportingText}
				onClose={handleDismiss}
				className={className}
			/>
		</motion.li>
	);
};

export default NotificationsItem;
