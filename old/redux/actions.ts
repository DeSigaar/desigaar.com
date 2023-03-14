import { ActionTypes, CHANGE_LANGUAGE, CHANGE_THEME, Language, Theme } from "@/types";
import { setTheme } from "@/utils";
import { NextRouter } from "next/router";

export const changeTheme = (theme: Theme): ActionTypes => {
	setTheme(theme);

	return {
		type: CHANGE_THEME,
		theme,
	};
};

export const changeLanguage = (language: Language, router?: NextRouter): ActionTypes => {
	if (router) router.push(router.pathname, router.pathname, { locale: language });

	return {
		type: CHANGE_LANGUAGE,
		language,
	};
};
