import React from "react";
import { Head as NextDocumentHead } from "next/document";
import NextHead from "next/head";
import { useI18n } from "next-localization";
import { projectConfig } from "@/project.config";
import { getFullTitle } from "@/utils";
import { lightTheme as theme } from "@/styles";

const _getMeta = () => {
	const { url } = projectConfig;

	return (
		<>
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
			/>
			<meta charSet="utf-8" />
			<link rel="author" href="humans.txt" />
			<link rel="alternate" href={url} hrefLang="x-default" />
			<link rel="alternate" href={`${url}en`} hrefLang="en" />
			<link rel="alternate" href={`${url}nl`} hrefLang="nl" />
			<meta httpEquiv="X-UA-Compatible" content="chrome=1" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-touch-fullscreen" content="yes" />
			<meta name="mssmarttagspreventparsing" content="true" />
			<meta name="classification" content="Website" />
			<meta name="og:type" content="website" />
			<meta name="rating" content="General" />
			<meta name="revisit-after" content="7 days" />
			<meta httpEquiv="Expires" content="0" />
			<meta httpEquiv="Pragma" content="no-cache" />
			<meta httpEquiv="Cache-Control" content="no-cache" />
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
		</>
	);
};

const _getMetaLocale = (locale: string) => {
	return (
		<>
			<meta httpEquiv="content-language" content={locale} />
		</>
	);
};

const _getRestOfHeadWithoutLocale = () => {
	const {
		name,
		faviconVersion,
		url,
		keywords,
		iconPath,
		email: { contact },
	} = projectConfig;

	return (
		<>
			<link rel="manifest" href={`/assets/icons/site.webmanifest?v=${faviconVersion}`} />
			<meta name="msapplication-config" content={`/assets/icons/browserconfig.xml?v=${faviconVersion}`} />

			<meta name="apple-mobile-web-app-title" content={name} />
			<meta name="application-name" content={name} />

			<meta name="msapplication-TileColor" content={theme.colors.primary.DEFAULT} />
			<meta name="theme-color" content={theme.colors.background} />
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.background} />
			<meta name="msapplication-navbutton-color" content={theme.colors.background} />

			<meta name="url" content={url} />
			<meta name="identifier-URL" content={url} />
			<meta name="og:url" content={url} />
			<meta name="msapplication-starturl" content={url} />

			<meta name="reply-to" content={contact} />
			<meta name="og:email" content={contact} />

			<meta name="subject" content={name} />
			<meta name="copyright" content={name} />
			<meta name="topic" content={name} />
			<meta name="og:title" content={name} />
			<meta name="og:site_name" content={name} />
			<meta name="application-name" content={name} />
			<meta name="msapplication-tooltip" content={`Launch ${name}`} />

			<meta name="keywords" content={keywords.join(",")} />

			<meta property="og:image" content={iconPath} />

			<meta name="author" content={name} />
		</>
	);
};

const _getRestOfHeadWithLocale = ({ abstract, description }: { abstract: string; description: string }) => {
	return (
		<>
			<meta name="abstract" content={abstract} />
			<meta name="description" content={description} />
			<meta name="summary" content={description} />
			<meta name="og:description" content={description} />
			<meta name="twitter:card" content={description} />
		</>
	);
};

const _getIcons = () => {
	const { faviconVersion } = projectConfig;

	return (
		<>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`/assets/icons/favicon-16x16.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`/assets/icons/favicon-32x32.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="194x194"
				href={`/assets/icons/favicon-194x194.png?v=${faviconVersion}`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`/assets/icons/apple-touch-icon.png?v=${faviconVersion}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href={`/assets/icons/android-chrome-192x192.png?v=${faviconVersion}`}
			/>
			<link
				rel="mask-icon"
				href={`/assets/icons/safari-pinned-tab.svg?v=${faviconVersion}`}
				color={theme.colors.primary.DEFAULT}
			/>
			<link rel="shortcut icon" href={`/assets/icons/favicon.ico?v=${faviconVersion}`} />
			<meta name="msapplication-TileImage" content={`/assets/icons/mstile-144x144.png?v=${faviconVersion}`} />
		</>
	);
};

const _getTitle = (title?: string, useTitleTemplate = true) => {
	let titleOutput = "";

	if (title && useTitleTemplate) titleOutput = getFullTitle(title);
	else if (title && !useTitleTemplate) titleOutput = title;
	else titleOutput = projectConfig.name;

	return <title>{titleOutput}</title>;
};

const _getExternalStyles = () => {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com/" />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Source+Sans+Pro&family=Fira+Code&display=swap"
			/>
		</>
	);
};

export const HeadNext = ({
	title,
	useTitleTemplate = true,
}: {
	title: string;
	useTitleTemplate?: boolean;
}): JSX.Element => {
	const i18n = useI18n();
	const { t, locale } = i18n;

	return (
		<NextHead>
			{_getMetaLocale(locale())}
			{_getTitle(title, useTitleTemplate)}
			{_getRestOfHeadWithLocale({
				abstract: t("information.abstract"),
				description: t("information.description"),
			})}
		</NextHead>
	);
};

export const HeadDocument = (): JSX.Element => {
	return (
		<NextDocumentHead>
			{_getMeta()}
			{_getIcons()}
			{_getRestOfHeadWithoutLocale()}
			{_getExternalStyles()}
		</NextDocumentHead>
	);
};

export const Head = HeadNext;

export default Head;
