import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
	const isLocalStorageAvailable = typeof window !== "undefined" && "localStorage" in window;

	const [storedValue, setStoredValue] = useState(() => {
		try {
			if (isLocalStorageAvailable) {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			}
			return typeof initialValue === "function" ? initialValue() : initialValue
		} catch (error) {
			console.error(`Error reading from local storage: ${error}`);
			return typeof initialValue === "function" ? initialValue() : initialValue
		}
	});

	useEffect(() => {
		if (storedValue === undefined) return window.localStorage.removeItem(key)
		if (isLocalStorageAvailable && storedValue !== undefined) {
			try {
				window.localStorage.setItem(key, JSON.stringify(storedValue));
				console.log(`Value for key "${key}" updated in local storage.`);
			} catch (error) {
				console.error(`Error writing to local storage: ${error}`);
			}
		}
	}, [key, storedValue, isLocalStorageAvailable]);

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
		} catch (error) {
			console.error(`Error setting value: ${error}`);
		}
	};

	return [storedValue, setValue];
}