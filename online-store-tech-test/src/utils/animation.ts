export const smoothShow = {
	initial: 'hide',
	animate: 'show',
	exit: 'hide',
	variants: {
		show: {
			opacity: 1,
		},
		hide: {
			opacity: 0,
		},
	},
	transition: {
		duration: 0.1,
	},
};

export const popUpOnMount = {
	initial: 'hide',
	animate: 'show',
	exit: 'hide',
	variants: {
		show: {
			opacity: 1,
			scale: 1,
		},
		hide: { opacity: 0, scale: 0.9 },
	},
	transition: { duration: 0.2 },
};
