import Image from 'next/image';
import { type FC } from 'react';

const Header: FC = () => {
	return (
		<header className='flex items-center justify-between py-5 px-4 shadow-custom'>
			<div>
				<Image
					src='/icons/site-logo.svg'
					alt='Tech Store Logo'
					width={19}
					height={25}
				/>
			</div>

			<div className='flex gap-1 items-center'>
				<Image
					src='/icons/bag.svg'
					alt='Tech Store Logo'
					width={19}
					height={25}
				/>
				<span className='text-sm font-medium text-gray-400'>x4</span>
			</div>
		</header>
	);
};

export default Header;
