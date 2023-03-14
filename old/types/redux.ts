export type Theme = "system" | "light" | "dark";
export type Language = "en" | "nl";

export interface State {
	app: {
		theme: Theme;
		language: Language;
	};
}

export const CHANGE_THEME = "@APP/CHANGE_THEME";
export const CHANGE_LANGUAGE = "@APP/CHANGE_LANGUAGE";

interface ChangeThemeAction {
	type: typeof CHANGE_THEME;
	theme: Theme;
}

interface ChangeLanguageAction {
	type: typeof CHANGE_LANGUAGE;
	language: Language;
}

export type AppActionTypes = ChangeThemeAction | ChangeLanguageAction;
export type ActionTypes = AppActionTypes;
