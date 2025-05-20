/**
 * Rounds a number to the nearest custom half step:
 * - Decimals between 0.0 and 0.3 round down to the integer
 * - Decimals between 0.4 and 0.7 round to the nearest 0.5
 * - Decimals between 0.8 and 0.9 round up to the next integer
 *
 * @param value - The number to round
 * @returns The number rounded to the nearest custom half step
 */
export function roundToCustomHalf(value: number): number {
	const integerPart = Math.trunc(value);
	const decimalPart = parseFloat((value - Math.trunc(value)).toFixed(2));

	if (decimalPart <= 0.3) {
		return integerPart;
	} else if (decimalPart <= 0.7) {
		return integerPart + 0.5;
	} else {
		return integerPart + 1;
	}
}
