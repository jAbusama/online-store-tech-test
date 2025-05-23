import { NotificationPositionsType } from '@/components/uikit/notification';
import { mergedCx } from '@/helpers/cx-merge';
import * as Portal from '@radix-ui/react-portal';
import { AnimatePresence } from 'framer-motion';
import { FunctionComponent, ReactNode } from 'react';

interface NotificationsListProps {
	children: ReactNode;
}

const positions: Record<NotificationPositionsType, string> = {
	top: 'top-0 right-0 left-0 items-center',
	'top-right': 'top-0 right-0 items-end',
	'top-left': 'top-0 left-0 items-start',
	bottom: 'bottom-0 right-0 left-0 items-center',
	'bottom-right': 'bottom-0 right-0 items-end',
	'bottom-left': 'bottom-0 left-0 items-start',
};

// TODO: check when design is ready
const NotificationsList: FunctionComponent<NotificationsListProps> = (
	props
) => {
	const { children } = props;

	const cxClassName = mergedCx(
		'pointer-events-none fixed z-20 m-4 flex flex-col gap-4 lg:m-8 notification',
		positions['top-right']
	);
	return (
		<Portal.Root>
			<ul aria-live='assertive' className={cxClassName}>
				<AnimatePresence initial={false}>{children}</AnimatePresence>
			</ul>
		</Portal.Root>
	);
};

export default NotificationsList;
