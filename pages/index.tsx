import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import projectConfig from "@/project.config";

const Page = dynamic(() => import("@/components/Page"));
const Head = dynamic(() => import("@/components/Head"));
const Main = dynamic(() => import("@/components/Main"));
const PageHomeContent = dynamic(() => import("@/components/Pages/Home"));

const HomePage = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;
	const { name } = projectConfig;

	return (
		<Page>
			<Head title={`${name}: ${t("information.abstract")}`} useTitleTemplate={false} />

			<Main fullPage spaced>
				<PageHomeContent />
			</Main>
		</Page>
	);
};

export default HomePage;
