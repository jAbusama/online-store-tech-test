'use client';
import Image from 'next/image';
import { useState, type FC } from 'react';

import { Modal } from '@/components/uikit/modal';
import Checkout from '@/components/shared/checkout';
import Bag from '@/components/shared/bag';

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

			<Bag onOpenCloseBag={onOpenCloseModal} />

			{showModal && (
				<Modal
					isOpen={showModal}
					dismissModal={onOpenCloseModal}
					closeOnClickOutside
					withCloseIcon
				>
					<Checkout dismissModal={onOpenCloseModal} />
				</Modal>
			)}
		</header>
	);
};

export default Header;
