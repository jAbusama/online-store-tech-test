'use client';
import Image from 'next/image';
import { useState, type FC } from 'react';

import { Modal } from '@/components/uikit/modal';
// import Cart from '@/components/shared/cart';
import Checkout from '@/components/shared/checkout';

const Header: FC = () => {
	const [showModal, setShowModal] = useState(false);

	const onOpenCloseModal = () => {
		setShowModal((prev) => !prev);
	};
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

			<div className='flex gap-1 items-center' onClick={onOpenCloseModal}>
				<Image
					src='/icons/bag.svg'
					alt='Tech Store Logo'
					width={19}
					height={25}
				/>
				<span className='text-sm font-medium text-gray-400'>x4</span>
			</div>

			{showModal && (
				<Modal
					isOpen={showModal}
					dismissModal={onOpenCloseModal}
					closeOnClickOutside
					withCloseIcon
				>
					{/* <Cart /> */}
					<Checkout />
				</Modal>
			)}
		</header>
	);
};

export default Header;
