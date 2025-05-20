import { mergedCx } from '@/helpers/cx-merge';
import StarIcon from '../../../../public/icons/star.svg';

interface IStarProps {
	numberOfStars: number;
	maxStars?: number;
	starSize?: number;
	activeColor?: string;
	emptyColor?: string;
}
export function Stars(props: IStarProps) {
	const {
		numberOfStars,
		maxStars = 5,
		starSize = 24,
		activeColor = 'text-yellow-500',
		emptyColor = 'text-gray-300',
	} = props;
	const starsPlaces = new Array(numberOfStars)
		.fill(1)
		.concat(new Array(maxStars - numberOfStars).fill(0));

	return (
		<div className='flex items-center'>
			{starsPlaces.map((star, index) => {
				return (
					<StarIcon
						key={`review-start-${index}`}
						width={starSize}
						height={starSize}
						className={mergedCx(
							'fill-current p-0.5',
							star === 1 ? activeColor : emptyColor
						)}
					/>
				);
			})}
		</div>
	);
}
