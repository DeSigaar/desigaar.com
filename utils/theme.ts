import { Theme } from "@/types";

export const checkDarkMode = (): void => {
	if (typeof window !== "undefined")
		if (
			window.localStorage.theme === "dark" ||
			((window.localStorage.theme !== "light" || window.localStorage.theme !== "system") &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			addDarkMode();
		else removeDarkMode();
};

export const setTheme = (theme: Theme): void => {
	switch (theme) {
		case "light":
			removeDarkMode();
			setThemeLocalStorage(theme);
			break;
		case "dark":
			addDarkMode();
			setThemeLocalStorage(theme);
			break;
		case "system":
		default:
			setThemeLocalStorage("system");

			if (typeof window !== "undefined")
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) addDarkMode();
				else removeDarkMode();
			else removeDarkMode();
			break;
	}
};

export const getTheme = (theme: Theme): Theme => {
	switch (theme) {
		case "light":
		case "dark":
			return theme;
		case "system":
		default:
			if (typeof window !== "undefined")
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
				else return "light";
			else return "light";
	}
};

export const setThemeLocalStorage = (theme: Theme): void => {
	switch (theme) {
		case "light":
		case "dark":
		case "system":
			addThemeLocalStorage(theme);
			break;
		default:
			removeThemeLocalStorage();
			break;
	}
};

export const addThemeLocalStorage = (theme: Theme): void => {
	if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
};

export const removeThemeLocalStorage = (): void => {
	if (typeof window !== "undefined") window.localStorage.removeItem("theme");
};

export const addDarkMode = (): void => {
	document?.querySelector("html")?.classList?.add("dark");
};

export const removeDarkMode = (): void => {
	document?.querySelector("html")?.classList?.remove("dark");
};

export const addListenerForTheme = (): void => {
	if (typeof window !== "undefined")
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => checkDarkMode());
};
