import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { I18nProvider } from "next-localization";
import { getLanguageDictionary, getLanguageFromString, getThemeFromString, useLocalStorage } from "@/utils";
import { useStore, changeLanguage, changeTheme } from "@/redux";

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
	// Redux store setup
	const { initialReduxState } = pageProps;
	const store = useStore(initialReduxState);

	// Dark mode setup
	import("@/utils").then(utils => {
		utils.checkDarkMode();
		utils.addListenerForTheme();
	});

	// Language setup
	const state = store.getState();
	const { language, theme } = state.app;
	const { locale } = router;

	const [lsTheme] = useLocalStorage("theme", "system");

	if (locale && language !== locale) store.dispatch(changeLanguage(getLanguageFromString(locale)));
	if (theme !== lsTheme) store.dispatch(changeTheme(getThemeFromString(lsTheme.toString())));

	return (
		<React.StrictMode>
			<Provider store={store}>
				<I18nProvider lngDict={getLanguageDictionary(language)} locale={language}>
					<Component {...pageProps} />
				</I18nProvider>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
