import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: string): (string | ((value: string) => void))[] => {
	const [storedValue, setStoredValue] = useState<string>(() => {
		try {
			if (typeof window !== "undefined") {
				const item = window.localStorage.getItem(key);
				return item ? item : initialValue;
			} else return initialValue;
		} catch (error) {
			console.warn(error);
			return initialValue;
		}
	});

	const setValue = (value: string) => {
		try {
			setStoredValue(value);
			if (typeof window !== "undefined") window.localStorage.setItem(key, value);
		} catch (error) {
			console.warn(error);
		}
	};

	return [storedValue, setValue];
};
