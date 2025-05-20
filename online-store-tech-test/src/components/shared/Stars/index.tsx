import { mergedCx } from '@/helpers/cx-merge';
import StarIcon from '../../../../public/icons/star.svg';
import HalfStarIcon from '../../../../public/icons/half-star.svg';

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

	const starsPlaces = () => {
		const stars = [];

		for (let i = 0; i < maxStars; i++) {
			if (i + 1 <= numberOfStars) {
				stars.push('full');
			} else if (i + 0.5 <= numberOfStars) {
				stars.push('half');
			} else {
				stars.push('empty');
			}
		}

		return stars;
	};

	return (
		<div className='flex items-center'>
			{starsPlaces().map((star, index) => {
				return star === 'half' ? (
					<HalfStarIcon
						key={`review-start-${index}`}
						width={starSize}
						height={starSize}
						className={mergedCx('fill-current p-0.5')}
					/>
				) : (
					<StarIcon
						key={`review-start-${index}`}
						width={starSize}
						height={starSize}
						className={mergedCx(
							'fill-current p-0.5',
							star === 'full' ? activeColor : emptyColor
						)}
					/>
				);
			})}
		</div>
	);
}
