export interface Color {
	DEFAULT: string;
	0?: string;
	100?: string;
	200?: string;
	300?: string;
	400?: string;
	500?: string;
	600?: string;
	700?: string;
	800?: string;
	900?: string;
	1000?: string;
}

export interface Theme {
	id: string;
	name: string;
	fonts: typeof font;
	sizes: typeof size;
	devices: typeof device;
	colors: {
		text: string;
		background: string;
		red: string;
		green: string;
		blue: string;
		gray: Color;
		primary: Color;
	};
}

export const sansSerifFont =
	"'Source Sans Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
export const serifFont = "'Bodoni Moda', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
export const monoFont =
	"'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

export const font = {
	DEFAULT: sansSerifFont,
	sans: sansSerifFont,
	serif: serifFont,
	mono: monoFont,
};

export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
};

export const lightTheme: Theme = {
	id: "light",
	name: "Light theme",
	fonts: font,
	sizes: size,
	devices: device,
	colors: {
		text: "#0a0a0a",
		background: "#ffffff",
		red: "#ef4444",
		green: "#10b981",
		blue: "#3b82f6",
		gray: {
			DEFAULT: "#757575",
			0: "#ffffff",
			100: "#f2f2f2",
			200: "#d9d9d9",
			300: "#9c9c9c",
			400: "#7e7e7e",
			500: "#757575",
			600: "#686868",
			700: "#5c5c5c",
			800: "#363636",
			900: "#2b2b2b",
			1000: "#000000",
		},
		primary: {
			DEFAULT: "#53a6f1",
		},
	},
};

export const darkTheme: Theme = {
	id: "dark",
	name: "Dark theme",
	fonts: font,
	sizes: size,
	devices: device,
	colors: {
		text: "#ffffff",
		background: "#0e0e0e",
		red: "#ef4444",
		green: "#10b981",
		blue: "#3b82f6",
		gray: {
			DEFAULT: "#757575",
			0: "#000000",
			100: "#2b2b2b",
			200: "#363636",
			300: "#5c5c5c",
			400: "#686868",
			500: "#757575",
			600: "#7e7e7e",
			700: "#9c9c9c",
			800: "#d9d9d9",
			900: "#f2f2f2",
			1000: "#ffffff",
		},
		primary: {
			DEFAULT: "#53a6f1",
		},
	},
};

export const themes = { lightTheme, darkTheme };

export default themes;
