import { Language, Theme } from "@/types";

export const getLanguageFromString = (language: string): Language => {
	switch (language) {
		case "en":
		case "nl":
			return language;
		default:
			return "en";
	}
};

export const getThemeFromString = (theme: string): Theme => {
	switch (theme) {
		case "system":
		case "light":
		case "dark":
			return theme;
		default:
			return "system";
	}
};
