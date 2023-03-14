const name = "De Sigaar";
const domain = "desigaar.com";

export interface ProjectConfig {
	name: string;
	titleTemplate: string;
	faviconVersion: string;
	domain: string;
	iconPath: string;
	url: string;
	keywords: Array<string>;
	startYear: number;
	email: {
		general: string;
		contact: string;
	};
	languages: Array<{ key: string; name: string }>;
}

export const projectConfig: ProjectConfig = {
	name,
	titleTemplate: "{{title}} – {{name}}",
	faviconVersion: "gAXWeoM0vm",
	domain,
	startYear: 2021,
	iconPath: "/assets/icons/android-chrome-512x512.png",
	url: `https://${domain}/`,
	keywords: ["de sigaar", "desigaar", "sigaar"],
	email: {
		general: `hello@${domain}`,
		contact: `contact@${domain}`,
	},
	languages: [
		{ key: "en", name: "English" },
		{ key: "nl", name: "Nederlands" },
	],
};

export default projectConfig;
