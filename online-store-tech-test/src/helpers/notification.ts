import { NotificationPositionsType } from '@/components/uikit/notification';

/**
 * @param position - The position of the Notification
 * @param fromEdge - The length of the position from the edge in pixels
 */
export const getMotionDirectionAndPosition = (
	position: NotificationPositionsType,
	fromEdge = 24
) => {
	console.log('position', position);
	const directionPositions: NotificationPositionsType[] = ['top', 'bottom'];
	const factorPositions: NotificationPositionsType[] = [
		'top-right',
		'bottom-right',
	];

	const direction = directionPositions.includes(position) ? 'y' : 'x';
	let factor = factorPositions.includes(position) ? 1 : -1;

	if (position === 'bottom') factor = 1;
	console.log({ [direction]: factor * fromEdge });
	return {
		[direction]: factor * fromEdge,
	};
};
