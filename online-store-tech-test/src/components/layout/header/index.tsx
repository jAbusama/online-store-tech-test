'use client';
import { type FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useDisclosure } from '@reactuses/core';

import Checkout from '@/components/shared/checkout';
import Bag from '@/components/shared/bag';
import { Skeleton } from '@/components/uikit/skeleton';

const Modal = dynamic(async () => await import('@/components/uikit/modal'), {
	ssr: false,
	loading: () => <Skeleton className='w-80 h-60' />,
});

const Header: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<header className='fixed inset-x-0 bg-white flex items-center justify-between py-5 px-4 shadow-custom'>
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
