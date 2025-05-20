/* eslint-disable import/no-extraneous-dependencies */
import classnames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * cx is a wrapper around classnames that merges tailwind classes
 * @param args - arguments to pass to classnames
 * @returns a string of classnames
 */
export const mergedCx = (...args: ArgumentArray): string => {
	return twMerge(classnames(args));
};
