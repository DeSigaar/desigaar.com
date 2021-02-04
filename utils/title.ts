import { projectConfig } from "@/project.config";

export const getFullTitle = (title: string): string => {
	const { name, titleTemplate } = projectConfig;
	let fullTitle = titleTemplate;

	fullTitle = fullTitle.replace("{{title}}", title);
	fullTitle = fullTitle.replace("{{name}}", name);

	return fullTitle;
};
