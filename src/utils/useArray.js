import { useState } from "react";

export default function useArray(initialValue) {
	const [array, setArray] = useState(initialValue);
	return {
		array,
		set: setArray,
		push: (value) => setArray((a) => [...a, value]),
		replace: (index, value) => setArray((a) => [...a.slice(0, index), value, ...a.slice(index + 1)]),
		filter: (callback) => setArray((a) => a.filter(callback)),
		remove: (index) => setArray((a) => a.filter((_, i) => i !== index)),
		clear: () => setArray([]),
		reset: () => setArray(initialValue),
	};
}
