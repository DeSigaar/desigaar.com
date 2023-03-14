import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import { capitalizeFirst } from "@/utils";

const Page = dynamic(() => import("@/components/Page"));
const Head = dynamic(() => import("@/components/Head"));
const Main = dynamic(() => import("@/components/Main"));
const Page404Content = dynamic(() => import("@/components/Pages/404"));

const NotFoundPage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Page>
			<Head title={`Error 404: ${capitalizeFirst(t("phrases.page-not-found"))}`} />

			<Main fullPage spaced>
				<Page404Content />
			</Main>
		</Page>
	);
};

export default NotFoundPage;
