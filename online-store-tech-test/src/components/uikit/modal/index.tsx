/* eslint-disable react/jsx-props-no-spreading */
import * as Portal from '@radix-ui/react-portal';
import { AnimatePresence, m } from 'framer-motion';
import {
	FunctionComponent,
	PropsWithChildren,
	Suspense,
	useEffect,
	useRef,
} from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

// import { Loading02, X } from '@/components/uikit/icon/icons/general';
import { CircleX, LoaderCircle } from 'lucide-react';
import { mergedCx } from '@/helpers/cx-merge';
import { popUpOnMount, smoothShow } from '@/utils/animation';
// import { mergedCx } from '@/shared/styles';
// import { useActions, useAppSelector } from '@/store/hooks';

// import { RenderModals } from '../utils/render-modals';

type ModalProps = {
	isOpen: boolean;
	closeOnClickOutside?: boolean;
	withCloseIcon?: boolean;
	dismissModal: () => void;
} & PropsWithChildren;

export const Modal: FunctionComponent<ModalProps> = (props) => {
	const { children, isOpen, closeOnClickOutside, withCloseIcon, dismissModal } =
		props;
	// const { modalKey, closeOnClickOutside, withCloseIcon, icon, modalProps } =
	// 	useAppSelector((state) => state.modal.modal);

	// const { dismissModal } = useActions();
	const ref = useRef(null);

	useEffect(() => {
		if (window?.document) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	});

	const handleClickOutside = () => {
		// TO DO add option onClose functionality
		if (closeOnClickOutside) dismissModal();
	};

	useOnClickOutside(ref, handleClickOutside);

	const handleEscape = (e: KeyboardEvent): void => {
		if (e.code === 'Escape' || e.key === 'Escape') dismissModal();
	};

	useEventListener('keydown', handleEscape);

	return (
		<Portal.Root>
			<AnimatePresence initial={false}>
				{isOpen ? (
					<m.div
						key='modal-overlay'
						{...smoothShow}
						className='fixed bottom-0 left-0 right-0 top-0 z-modalOverlay flex items-center justify-center bg-[#D9D9D9BF]/75'
					>
						<m.div
							key='modal-window'
							{...popUpOnMount}
							className='relative modal z-modal max-w-[336px]'
							role='dialog'
							aria-modal='true'
							ref={ref}
						>
							<div className='bg-white relative rounded-[10px]'>
								{withCloseIcon && (
									<button
										type='button'
										className='absolute top-5 right-4'
										onClick={() => dismissModal()}
									>
										<CircleX
											aria-label='close'
											aria-labelledby='close button'
											className={mergedCx(
												'text-gray-450 transition-colors cursor-pointer'
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
									<div className=' max-h-[80vh] overflow-y-auto overflow-x-hidden px-2.5 py-5'>
										{children}
									</div>
								</Suspense>
							</div>
						</m.div>
					</m.div>
				) : null}
			</AnimatePresence>
		</Portal.Root>
	);
};
