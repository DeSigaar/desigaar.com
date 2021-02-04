import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import { capitalizeFirst } from "@/utils";
import * as Styled from "./styles";
import type { Props } from "./types";

const Link = dynamic(() => import("@/components/Link"));

export const PageErrorContent = ({ errorText }: Props): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Styled.Wrapper>
			<div>
				<Styled.Label>{errorText}</Styled.Label>
				<Styled.Heading>{t("sentences.500-title")}</Styled.Heading>
				<Styled.Paragraph>{t("sentences.500-text")}</Styled.Paragraph>

				<span
					css={`
						margin-top: 1rem;
						margin-left: 0.25rem;
					`}
				>
					<Link type="button-link" href={t("navigation.home.url")}>
						{capitalizeFirst(t("phrases.back-to-safety"))}
					</Link>
				</span>
			</div>
			<Styled.Image />
		</Styled.Wrapper>
	);
};

export default PageErrorContent;
