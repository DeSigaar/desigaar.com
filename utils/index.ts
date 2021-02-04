export * from "./title";
export * from "./i18n";
export * from "./theme";
export * from "./convert";
export * from "./hooks";

export const capitalizeFirst = (string: string): string => {
	if (typeof string !== "string") return "";

	return string.charAt(0).toUpperCase() + string.slice(1);
};
