import React from "react";
import { NextPageContext } from "next";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";

const Page = dynamic(() => import("@/components/Page"));
const Head = dynamic(() => import("@/components/Head"));
const Main = dynamic(() => import("@/components/Main"));
const PageErrorContent = dynamic(() => import("@/components/Pages/Error"));

const ErrorPage = ({ statusCode = null }: { statusCode?: number | null }): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	const errorText = statusCode ? t("phrases.error-with-status", { statusCode }) : t("phrases.error-without-status");

	return (
		<Page>
			<Head title={errorText} />

			<Main fullPage spaced>
				<PageErrorContent errorText={errorText} />
			</Main>
		</Page>
	);
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
	let statusCode = null;
	if (res) ({ statusCode } = res);
	else if (err) ({ statusCode } = err);

	return {
		statusCode,
	};
};

export default ErrorPage;
