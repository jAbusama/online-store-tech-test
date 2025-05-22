/**
 * Creates a debounced version of a function.
 * @param fn The function to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns A debounced function.
 */
function debounce<T extends (...args: never[]) => void>(
	fn: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

export default debounce;
