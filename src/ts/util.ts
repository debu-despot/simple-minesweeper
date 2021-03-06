
export const shuffle=<T>(array: T[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const r = Math.floor(Math.random() * (i + 1));
		const tmp = array[i];
		array[i] = array[r];
		array[r] = tmp;
	}
}

export const range = (start: number, count: number) =>
					[...Array<number>(count)].map((_, i) => start + i);

