'use client';
import Image from 'next/image';
import { type FC } from 'react';

import { Modal } from '@/components/uikit/modal';
import Checkout from '@/components/shared/checkout';
import Bag from '@/components/shared/bag';
import { useDisclosure } from '@reactuses/core';

const Header: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

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

			<Bag onOpenCloseBag={onOpen} />

			{isOpen && (
				<Modal
					isOpen={isOpen}
					dismissModal={onClose}
					closeOnClickOutside
					withCloseIcon
				>
					<Checkout dismissModal={onClose} />
				</Modal>
			)}
		</header>
	);
};

export default Header;
