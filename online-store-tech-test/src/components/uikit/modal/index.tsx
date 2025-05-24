/* eslint-disable react/jsx-props-no-spreading */
import { FunctionComponent, PropsWithChildren, Suspense, useRef } from 'react';
import * as Portal from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { CircleX, LoaderCircle } from 'lucide-react';
import { mergedCx } from '@/helpers/cx-merge';

type ModalProps = {
	isOpen: boolean;
	closeOnClickOutside?: boolean;
	withCloseIcon?: boolean;
	dismissModal: () => void;
} & PropsWithChildren;

const Modal: FunctionComponent<ModalProps> = (props) => {
	const { children, isOpen, closeOnClickOutside, withCloseIcon, dismissModal } =
		props;

	const ref = useRef({} as HTMLDivElement);

	const overlayVariants = {
		show: {
			opacity: 1,
			backdropFilter: 'blur(4px)',
			transition: {
				duration: 0.2,
				ease: 'easeOut',
				when: 'beforeChildren',
			},
		},
		hide: {
			opacity: 0,
			backdropFilter: 'blur(0px)',
			transition: {
				duration: 0.15,
				ease: 'easeIn',
				when: 'afterChildren',
			},
		},
	};

	const modalVariants = {
		show: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 25,
				stiffness: 400,
				mass: 0.5,
				delay: 0.1,
			},
		},
		hide: {
			opacity: 0,
			scale: 0.95,
			y: 20,
			transition: {
				type: 'spring',
				damping: 30,
				stiffness: 400,
			},
		},
	};

	const handleClickOutside = () => {
		if (closeOnClickOutside) dismissModal();
	};

	useOnClickOutside(ref, handleClickOutside);

	const handleEscape = (e: KeyboardEvent): void => {
		if (e.code === 'Escape' || e.key === 'Escape') dismissModal();
	};

	useEventListener('keydown', handleEscape);

	return (
		<Portal.Root>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key='modal-overlay'
						initial='hide'
						animate='show'
						exit='hide'
						variants={overlayVariants}
						className='fixed inset-0 z-modalOverlay flex items-center justify-center bg-[#D9D9D9BF]/75 supports-backdrop-blur:bg-[#D9D9D9]/75'
					>
						<motion.div
							key='modal-window'
							initial='hide'
							animate='show'
							exit='hide'
							variants={modalVariants}
							className='relative modal z-modal w-full max-w-[336px] mx-4'
							role='dialog'
							aria-modal='true'
							ref={ref}
						>
							<div className='bg-white relative rounded-[10px] shadow-xl shadow-black/20'>
								{withCloseIcon && (
									<button
										type='button'
										className='absolute top-5 right-4 z-10 group'
										onClick={() => dismissModal()}
										aria-label='Close modal'
									>
										<CircleX
											className={mergedCx(
												'text-gray-450 group-hover:text-gray-600 transition-colors cursor-pointer',
												'transform transition-transform group-hover:scale-110'
											)}
											size='18'
										/>
									</button>
								)}

								<Suspense
									fallback={
										<div className='min-h-[300px] flex items-center justify-center'>
											<LoaderCircle className='animate-spin' size='30' />
										</div>
									}
								>
									<div className='max-h-[90vh] overflow-y-auto overflow-x-hidden px-2.5 py-5'>
										{children}
									</div>
								</Suspense>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal.Root>
	);
};

export default Modal;
